document.getElementById('forgotPasswordForm').addEventListener('submit', function(event) {
    event.preventDefault();
  
    // Get user inputs
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
  
    // For demonstration purposes, just showing the user's input
    const message = `Reset password link sent to email: ${email}, or phone: ${phone}`;
    document.getElementById('message').textContent = message;
  });
  