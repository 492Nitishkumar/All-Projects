document.addEventListener("DOMContentLoaded", function() {
    // Assume login history is retrieved from the server
    var loginHistory = [
      { browser: "Chrome", os: "Windows", device: "Desktop", ip: "192.168.1.1", timestamp: "2024-04-20 10:00:00" },
      { browser: "Safari", os: "iOS", device: "Mobile", ip: "192.168.1.2", timestamp: "2024-04-19 14:30:00" },
      // Add more login history entries as needed
    ];
  
    var loginHistoryContainer = document.getElementById("loginHistory");
  
    loginHistory.forEach(function(entry) {
      var loginEntry = document.createElement("div");
      loginEntry.classList.add("login-entry");
      loginEntry.innerHTML = `
        <strong>Browser:</strong> ${entry.browser}<br>
        <strong>OS:</strong> ${entry.os}<br>
        <strong>Device:</strong> ${entry.device}<br>
        <strong>IP Address:</strong> ${entry.ip}<br>
        <strong>Login Time:</strong> ${entry.timestamp}<br>
      `;
      loginHistoryContainer.appendChild(loginEntry);
    });
  });
  