document.getElementById("loginForm").addEventListener("submit", function (e) {
    e.preventDefault();
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
  
    if (email && password) {
      alert("Login successful!");
    } else {
    alert("Please fill in all login fields.");
    }
  });
  
  document.getElementById("signupForm").addEventListener("submit", function (e) {
    e.preventDefault();
    const username = document.getElementById("username").value;
    const email = document.getElementById("signupEmail").value;
    const password = document.getElementById("signupPassword").value;
  
    if (username.length < 3) {
      alert("Username must be at least 3 characters.");
    } else if (!email.includes("@")) {
      alert("Please enter a valid email.");
    } else if (password.length < 6) {
      alert("Password must be at least 6 characters.");
    } else {
      alert("Signup successful!");
    }
  });

  