//to redirect the one page to another page
function redirectPage(pageURL) {
  window.location.href = pageURL;
}

//login page js
function loginData() {
  let email, password;
  email = document.getElementById("email").value;
  password = document.getElementById("password").value;

  let user_record = new Array();
  user_record = JSON.parse(localStorage.getItem("users"))
    ? JSON.parse(localStorage.getItem("users"))
    : [];

  let loggedUser = user_record.find(
    (user) => user.email === email && user.password === password
  );

  if (loggedUser) {
    alert("You have successfully login...");
    localStorage.setItem("username", loggedUser.username);
    localStorage.setItem("email", loggedUser.email);
    window.location.href = "profile.html";
  } else {
    alert("Login fail...Please enter the valid Credentials");
  }
}

//profile page js
function logOut() {
  localStorage.removeItem("username");
  localStorage.removeItem("email");
  window.location.href = "login.html";
}

//signup page js
function signupData() {
  let username, email, password;

  username = document.getElementById("username").value;
  email = document.getElementById("email").value;
  password = document.getElementById("password").value;

  let user_recoreds = new Array();
  user_recoreds = JSON.parse(localStorage.getItem("users"))
    ? JSON.parse(localStorage.getItem("users"))
    : [];

  if (
    user_recoreds.some((v) => {
      return v.email == email;
    })
  ) {
    alert("Duplicate data is not allowed...");
  } else {
    user_recoreds.push({
      username: username,
      email: email,
      password: password,
    });

    localStorage.setItem("users", JSON.stringify(user_recoreds));
  }
}

//click the btn and show content
const loginLink = document.getElementById("loginLink");
const signupLink = document.getElementById("signupLink");
const loginForm = document.getElementById("loginForm");
const signupForm = document.getElementById("signupForm");
const homelink = document.getElementById("homelink");

homelink.addEventListener("click", function (event) {
  event.preventDefault();
  loginForm.style.display = "none";
  signupForm.style.display = "none";
});

loginLink.addEventListener("click", function (event) {
  event.preventDefault();
  loginForm.style.display = "block";
  signupForm.style.display = "none";
});

signupLink.addEventListener("click", function (event) {
  event.preventDefault();
  loginForm.style.display = "none";
  signupForm.style.display = "block";
});
