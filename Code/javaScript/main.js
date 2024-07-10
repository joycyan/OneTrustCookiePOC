document.getElementById("demo").onclick = function pageLoad() {
  location.href = "../html/subpage.html";
};

document.getElementById("user").onclick = function pageLoadUser() {
  location.href = "../html/user.html";
};

// WORKAROUND: OneTrust doesn't work consistently
document.getElementById("otbutton").onclick = function infoDisplay() {
  // Display manually the cookie settings
  window.OneTrust.ToggleInfoDisplay();
};

document.getElementById("price").innerHTML =
  document.cookie.match("(^|;)\\s*" + "Unit" + "\\s*=\\s*([^;]+)")?.pop() ||
  "no_value_storeded";

const str =
  document.cookie.match("(^|;)\\s*" + "Email" + "\\s*=\\s*([^;]+)")?.pop() ||
  "no_value_stored";

document.getElementById("username").innerHTML = decodeURI(str);

document.getElementById("pageview").innerHTML =
  document.cookie
    .match("(^|;)\\s*" + "pageviewCount" + "\\s*=\\s*([^;]+)")
    ?.pop() || "no_value_stored";

console.log("logging consent changes: ", window.OnetrustActiveGroups);

const changeLang = (languageCode) => {
  document.documentElement.setAttribute("lang", languageCode);
};

//START login and logout functionalities

function getStoredLoginEmail() {
  return localStorage.getItem("loginEmail");
}

function displayAuthButton() {
  const authenticationBtnContainer = document.getElementById(
    "authenticationBtnContainer"
  );
  const loginEmail = getStoredLoginEmail();
  if (loginEmail) {
    authenticationBtnContainer.innerHTML = `${loginEmail} <button type="button" class="mb-3" onclick="signOut()">Sign out</button>`;
  } else {
    authenticationBtnContainer.innerHTML = `<button type="button" class="mb-3" data-bs-toggle="modal" data-bs-target="#loginModal">Login</button>`;
  }
}

function signOut() {
  localStorage.removeItem("loginEmail");
  // document.cookie = 'OptanonConsent' + '=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
  location.reload();
}

document.addEventListener("DOMContentLoaded", displayAuthButton);

const loginForm = document.getElementById("loginForm");

loginForm.addEventListener("submit", function (e) {
  e.preventDefault();
  var loginEmail = document.getElementById("loginEmail").value;
  localStorage.setItem("loginEmail", loginEmail);
  location.reload();
});

//END login and logout functionalities
