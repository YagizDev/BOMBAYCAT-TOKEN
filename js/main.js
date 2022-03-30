const collapsibles = document.querySelectorAll(".collapsible");
collapsibles.forEach((item) =>
  item.addEventListener("click", function () {
    this.classList.toggle("collapsible--expanded");
  })
);
var mybutton = document.getElementById("goTop");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

var navclick = document.getElementsByClassName("nav");

for (var i = 0; i < navclick.length; i++) {
  navclick[i].onclick = function () {
    document.getElementById("navbar").classList.toggle("click");
  };
}

function changeBg() {
  let navbar = document.getElementById("navbar");
  let scrollvalue = window.scrollY;

  if (scrollvalue < 150) {
    navbar.classList.remove("bgchange");
  } else navbar.classList.add("bgchange");
}

window.addEventListener("scroll", changeBg);
