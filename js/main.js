
// var ready = (callback) => {
//   if (document.readyState != "loading") callback();
//   else document.addEventListener("DOMContentLoader", callback);
// }

// ready(() => {
//   document.querySelector(".header").style.height = window.innerHeight + "px";
// })
function myFunction() {
  var name = prompt("What's your first name?", "");
  var email = prompt("What's your email address?", "");
  if (name && email) {
    alert("Thank you for visiting!");
  } else {
    alert("Hava a great day!")
  }
}