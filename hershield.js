// Navigation and UI functionality
function showSection(sectionId) {
    // Hide all sections
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => {
        section.classList.remove('active');
    });
    
    // Show selected section
    document.getElementById(sectionId).classList.add('active');
    
    // Update active nav link
    const navLinks = document.querySelectorAll('.nav-links a');
    navLinks.forEach(link => {
        link.classList.remove('active');
    });
    
    // Find and activate the corresponding nav link
    const activeLink = document.querySelector(`[onclick="showSection('${sectionId}')"]`);
    if (activeLink) {
        activeLink.classList.add('active');
    }
}

function toggleMobileMenu() {
    const navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('active');
}

// Self-defense training
function startDefenseTraining() {
    alert("Interactive self-defense training module would be implemented here with video tutorials and practice exercises. For now, please consult with local self-defense instructors for hands-on training.");
}

// Health reminders
function showHealthReminder() {
    const reminders = [
        "Schedule your annual gynecological exam",
        "Book a mammogram if you're over 40",
        "Don't forget your regular Pap smear",
        "Check your blood pressure this month",
        "Practice stress-relief techniques daily"
    ];
    
    const randomReminder = reminders[Math.floor(Math.random() * reminders.length)];
    alert(`Health Reminder: ${randomReminder}`);
}

// Emergency functions
function handleEmergency() {
    if (confirm("This is an emergency button. Do you need immediate assistance?")) {
        alert("In a real emergency, this would:\n\n1. Call emergency services\n2. Send your location to emergency contacts\n3. Start recording audio/video\n4. Send automated distress messages\n\nFor now, please call 911 if you're in immediate danger.");
    }
}

function callNumber(number) {
    if (confirm(`Do you want to call ${number}?`)) {
        // In a real application, this would initiate a phone call
        window.open(`tel:${number}`);
    }
}

function shareLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function(position) {
            const lat = position.coords.latitude;
            const lng = position.coords.longitude;
            const locationUrl = `https://maps.google.com/?q=${lat},${lng}`;
            
            if (navigator.share) {
                navigator.share({
                    title: 'My Current Location - Emergency',
                    text: 'I need help. This is my current location:',
                    url: locationUrl,
                });
            } else {
                // Fallback for browsers that don't support Web Share API
                navigator.clipboard.writeText(`Emergency - My location: ${locationUrl}`);
                alert("Location copied to clipboard. Share this with your emergency contacts.");
            }
        }, function(error) {
            alert("Unable to retrieve your location. Please ensure location services are enabled.");
        });
    } else {
        alert("Geolocation is not supported by this browser.");
    }
}

function sendEmergencyAlert() {
    alert("Emergency alert would be sent to your pre-configured emergency contacts with your location and a distress message. Please set up your emergency contacts in a real implementation.");
}

function recordEvidence() {
    alert("This feature would start recording audio/video evidence. In a real implementation, this would use device camera/microphone APIs with proper permissions.");
}

// Utility functions
function showNotification(message, type = 'info') {
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    notification.textContent = message;
    
    // Style the notification
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        padding: 1rem 1.5rem;
        background: ${type === 'emergency' ? '#ff1744' : '#e91e63'};
        color: white;
        border-radius: 5px;
        z-index: 10000;
        box-shadow: 0 4px 12px rgba(0,0,0,0.3);
        animation: slideIn 0.3s ease;
    `;
    
    // Add to page
    document.body.appendChild(notification);
    
    // Remove after 5 seconds
    setTimeout(() => {
        notification.style.animation = 'slideOut 0.3s ease';
        setTimeout(() => {
            document.body.removeChild(notification);
        }, 300);
    }, 5000);
}

// Emergency contact management
function addEmergencyContact() {
    const name = prompt("Enter contact name:");
    const phone = prompt("Enter phone number:");
    
    if (name && phone) {
        // In a real app, this would save to database/local storage
        alert(`Emergency contact added: ${name} - ${phone}\n\nNote: In a real implementation, this would be saved to your profile.`);
    }
}

function testEmergencySystem() {
    showNotification("Testing emergency system...", 'info');
    
    setTimeout(() => {
        showNotification("Emergency system test completed successfully!", 'emergency');
    }, 2000);
}

// Safety tips functionality
function getRandomSafetyTip() {
    const tips = [
        "Always let someone know where you're going and when