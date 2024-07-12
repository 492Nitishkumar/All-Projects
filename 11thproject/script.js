// Function to show a notification
function showNotification(title, options) {
    // Check if the browser supports notifications
    if (!("Notification" in window)) {
        alert("This browser does not support desktop notification");
    } else {
        // Request permission for notifications
        Notification.requestPermission().then(function(permission) {
            if (permission === "granted") {
                // Create a new notification
                new Notification(title, options);
            }
        });
    }
}

// Event listeners for buttons
document.getElementById("newPostBtn").addEventListener("click", function() {
    showNotification("New Post", {
        body: "Check out the latest post on our website!"
    });
});

document.getElementById("newVideoBtn").addEventListener("click", function() {
    showNotification("New Video", {
        body: "A new video has been uploaded on our YouTube channel!"
    });
});

document.getElementById("newChatBtn").addEventListener("click", function() {
    showNotification("New Chat", {
        body: "You have a new message on Twitter. Check it out!"
    });
});
