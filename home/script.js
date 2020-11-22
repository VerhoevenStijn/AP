let button = document.querySelector(".hamburgerMain");

button.addEventListener("click", function () {
  let nav = document.querySelector("nav");
  nav.style.left = "0";
  let close = document.querySelector(".close");
  close.style.visibility = "visible";

})

let close = document.querySelector(".close");

close.addEventListener("click", function () {
  let nav = document.querySelector("nav");
  nav.style.left = "-250px";
})
