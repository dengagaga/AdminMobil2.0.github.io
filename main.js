const headerMenu = document.querySelector(".header-menu");
const headerAll = document.querySelector(".header_all");
const headerLeft = document.querySelector(".header-menu-left");
const headerRight = document.querySelector(".header-menu-right");
const dropMenu = document.querySelector(".drop_menu");
const dropMenuList = document.querySelector(".drop_menu-list");
const dropMenuItem = document.querySelector(".drop_menu-item");
const menuRigth = document.querySelector(".menu-rigth");
const Svernyt = document.querySelector(".svernyt");
const cp = document.querySelector(".cp");
const cash = document.querySelector(".cash");
const menuItems = document.querySelectorAll(".menu-left-item");
const menuTextNone = document.querySelectorAll(".menu_text-none");
const menuRightLinks = document.querySelectorAll(".menu-right-link");
const dash = document.querySelector(".dash");
const vector = document.querySelectorAll(".vector");
const vectorHome = document.querySelector(".vector-home");

headerMenu.addEventListener("click", () => {
  dropMenu.classList.toggle("none");
  headerMenu.classList.toggle("header-menu--active");
  headerAll.classList.toggle("header_all--active");
});

menuItems.forEach((item) => {
  item.addEventListener("click", () => {
    console.log();
    if (item.dataset.fer == "one") {
      dash.classList.toggle("dash--active");
      vector.forEach((v) => {
        v.classList.toggle("vector-white");
      });
      vector2.forEach((v2) => {
        v2.classList.remove("vector-2--active");
      });
      cash.classList.remove("cash--active");
      vectorHome.classList.remove("vector-home-white");
      // menuRigth.style.display = "";

      // brMenu.classList.toggle("br-menu--active");

      // menuRigth.classList.toggle("menu-rigth--active");
      // menuTextNone.forEach((text) => {
      //   text.classList.toggle("text-none");
      // });
      // menuRightLinks.forEach((link) => {
      //   link.classList.toggle("menu-right-link--active");
      // });
    } else if (item.dataset.fer == "two") {
      cash.classList.add("cash--active");
      vectorHome.classList.add("vector-home-white");
    }
  });
});

const brMenu = document.querySelector(".br-menu");

cash.addEventListener("click", () => {
  brMenu.classList.add("br-menu--active");
  menuRightLinks.forEach((link) => {
    link.classList.remove("menu-right-link--active");
  });
  menuTextNone.forEach((text) => {
    text.classList.remove("text-none");
  });
  vector.forEach((v) => {
    v.classList.remove("vector-white");
  });
  vector2.forEach((v2) => {
    v2.classList.remove("vector-2--active");
  });
  // menuRigth.classList.remove("menu-rigth-none");
  // menuRigth.classList.remove("menu-rigth--active");
  dash.classList.remove("dash--active");
  // menuRigth.style.display = "";
});
window.addEventListener("click", (event) => {
  let user = 1;

  user = false;
  if (event.target.parentElement == headerAll) {
    user = true;
  } else if (event.target.parentElement == headerMenu) {
    user = true;
  } else if (event.target.parentElement == headerLeft) {
    user = true;
  } else if (event.target.parentElement == headerRight) {
    user = true;
  } else if (event.target.parentElement == dropMenuList) {
    user = true;
  } else if (event.target == dropMenuItem) {
    user = true;
  }
  if (user == false) {
    dropMenu.classList.add("none");
    headerMenu.classList.remove("header-menu--active");
    headerAll.classList.remove("header_all--active");
  }
});
const settingOne = document.querySelector(".setting-one");
const vector2 = document.querySelectorAll(".vector-2");
const modal = document.querySelector(".modal");
const body = document.body;
const close = document.querySelector(".Close");
settingOne.onclick = function () {
  // menuRigth.style.display = "none";
  menuTextNone.forEach((text) => {
    text.classList.toggle("text-none");
  });
  brMenu.classList.remove("br-menu--active");
  // dash.classList.remove("dash--active");
  // vector.forEach((v) => {
  //   v.classList.remove("vector-white");
  // });
  // vector2.forEach((v2) => {
  //   v2.classList.toggle("vector-2--active");
  // });
  modal.classList.toggle("modal-none");
  body.classList.toggle("grey");
};
close.onclick = function () {
  modal.classList.add("modal-none");
  menuTextNone.forEach((text) => {
    text.classList.remove("text-none");
  });
  vector2.forEach((v2) => {
    v2.classList.remove("vector-2--active");
  });
  body.classList.remove("grey");
};

/* MOBIL GLAV */
const burger = document.querySelector(".burger");
const burgerMenuS = document.querySelector(".burger-menuS");
const burgerIcon = document.querySelector(".burger-icon");
const headerH3 = document.querySelector(".header-h3");
const burgerSvg = document.querySelector(".burger-svg");
const burgerIconSpan = document.querySelector(".burger-icon-span");
const burgerMenuDrop = document.querySelector(".burger-menu-drop");
const footerMenuItem = document.querySelectorAll(".footer_menu-item");
const footerMenuSvg = document.querySelectorAll(".footer_menu-svg");

burgerIcon.onclick = () => {
  headerH3.classList.toggle("header-h3-glav--none");
  burgerSvg.classList.toggle("burger-svg--active");
  burgerIconSpan.classList.toggle("burgerIconSpan--active");
  burger.classList.toggle("burger--active");
};
burgerMenuDrop.onclick = () => {
  burgerMenuDrop.classList.toggle("burgerMenuDrop--active");
  burgerMenuS.classList.toggle("burgerMenuS--none");
};
