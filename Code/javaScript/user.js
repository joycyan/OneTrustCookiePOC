var user = prompt("Enter your email address:");

document.getElementById('username').innerHTML = user? user:"no_value_entered";

document.getElementById('price').innerHTML =  document.cookie.match('(^|;)\\s*' + "Unit" + '\\s*=\\s*([^;]+)')?.pop() || 'no_value_stored'

window.OneTrust.OnConsentChanged(() => {
    console.log(window.OnetrustActiveGroups);
});

document.getElementById("back").onclick = function backToIndex() {
    location.href = "../html/index.html";
};