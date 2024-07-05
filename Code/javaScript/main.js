document.getElementById("demo").onclick = function pageLoad() {
    location.href = "../html/subpage.html";
};

document.getElementById("user").onclick = function pageLoadUser() {
  location.href = "../html/user.html";
};

// WORKAROUND: OneTrust doesn't work consistently
document.getElementById("otbutton").onclick = function infoDisplay() {
  // Display manually the cookie settings
  window.OneTrust.ToggleInfoDisplay()
};

document.getElementById('price').innerHTML =  document.cookie.match('(^|;)\\s*' + "Unit" + '\\s*=\\s*([^;]+)')?.pop() || 'no_value_storeded';

const str = document.cookie.match('(^|;)\\s*' + "Email" + '\\s*=\\s*([^;]+)')?.pop() || 'no_value_stored';

document.getElementById('username').innerHTML = decodeURI(str);

document.getElementById('pageview').innerHTML = document.cookie.match('(^|;)\\s*' + "pageviewCount" + '\\s*=\\s*([^;]+)')?.pop() || 'no_value_stored';


  console.log("logging consent changes: ", window.OnetrustActiveGroups);

  const changeLang = (languageCode) => {
    document.documentElement.setAttribute("lang", languageCode);
  };





