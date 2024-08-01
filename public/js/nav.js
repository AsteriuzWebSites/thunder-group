let drawerToggle = document.getElementById("drawer-nav");
let nav = document.getElementById("nav");
let navInner = document.getElementById("nav-inner");
let prevScrollpos = window.scrollY;

/* -------------------------------------------------------------------------- */
/*                            Hide nav when scroll                            */
/* -------------------------------------------------------------------------- */
window.onscroll = function () {
  let currentScrollPos = window.scrollY;
  if (
    prevScrollpos > currentScrollPos ||
    currentScrollPos < 96 ||
    drawerToggle.checked
  ) {
    nav.style.transform = "translateY(0)";
  } else {
    nav.style.transform = "translateY(-100%)";
  }
  prevScrollpos = currentScrollPos;

  if (currentScrollPos > 48) {
    // padding 12px height
    nav.classList.add("backdrop-blur-md");
    navInner.style.padding = "12px 8px";
  } else {
    nav.classList.remove("backdrop-blur-md");
    navInner.style.padding = "24px 8px";
  }
};

/* -------------------------------------------------------------------------- */
/*                                 Drawer Menu                                */
/* -------------------------------------------------------------------------- */
let drawerOpenIcon = document.getElementById("drawer-open-icon");
let drawerCloseIcon = document.getElementById("drawer-close-icon");

document.addEventListener("click", function (e) {
  if (drawerToggle.checked) {
    drawerOpenIcon.style.display = "none";
    drawerCloseIcon.style.display = "block";
  } else {
    drawerOpenIcon.style.display = "block";
    drawerCloseIcon.style.display = "none";
  }
});

let drawerButton = document.getElementsByClassName("drawer-button");


for (let i = 0; i < drawerButton.length; i++) {
  drawerButton[i].addEventListener("click", function () {
    drawerToggle.checked = false;
  });
}