const inp1 = document.querySelector(".form-1-all-inp");
const inp2 = document.querySelector(".form-2-all-inp");
const inp3 = document.querySelector(".form-3-all-inp");
const btn1 = document.querySelector(".form-1-btn");
const btnHelp = document.querySelector(".btn-help");
const btnHelp2 = document.querySelector(".btn-help-2");
const form1 = document.querySelector(".form-1");
const ContTitleBlock = document.querySelector(
  ".container_all-top-rigth-title-block"
);
const warning = document.querySelector(".warning");
const warning2 = document.querySelector(".warning-2");
const warning3 = document.querySelector(".warning-3");
const erorSpan = document.querySelector(".eror-span");
const erorSpan2 = document.querySelector(".eror-span-2");
const erorSpan3 = document.querySelector(".eror-span-3");
const btn2 = document.querySelector(".form-2-btn-link");
const btn3 = document.querySelector(".form-3-btn-link");
const btn4 = document.querySelector(".form-4-btn-link");
const contBot = document.querySelector(".container_all-bot");
const contRight = document.querySelector(".container_all-top-rigth");
const contRightTwo = document.querySelector(".container_all-top-rigth-two");
const contRightThree = document.querySelector(".container_all-top-rigth-three");
const contRightFour = document.querySelector(".container_all-top-rigth-four");
const smena = document.querySelector(".container_all-top-rigth-two-link");
const password = document.querySelector(".form-2-btn-password");
const vhod = document.querySelector(".form-3-btn-password");
const vhod2 = document.querySelector(".form-4-btn-password");
const inp4s = document.querySelectorAll(".input-form-4");
inp1.addEventListener("click", () => {
  inp1.placeholder = "";
  inp1.classList.add("ma");
});
inp1.addEventListener("input", () => {
  if (inp1.value.length > 0) {
    btn1.removeAttribute("disabled");
  } else {
    btn1.setAttribute("disabled", true);
  }
});
inp2.addEventListener("click", () => {
  inp2.placeholder = "";
  inp2.classList.add("ma");
});
inp2.addEventListener("input", () => {
  if (inp2.value.length > 0) {
    btn2.parentElement.removeAttribute("disabled");
  } else {
    btn2.parentElement.setAttribute("disabled", true);
  }
});
inp3.addEventListener("click", () => {
  inp3.placeholder = "";
  inp3.classList.add("ma");
});
inp3.addEventListener("input", () => {
  if (inp3.value.length > 0) {
    btn3.parentElement.removeAttribute("disabled");
  } else {
    btn3.parentElement.setAttribute("disabled", true);
  }
});

window.addEventListener("click", (event) => {
  let user = 1;
  user = false;
  if (event.target == inp1) {
    user = true;
  } else if (event.target == inp2) {
    user = true;
  } else if (event.target == inp3) {
    user = true;
  }
  if (user == false) {
    inp1.placeholder = "Адрес электронной почты";
    inp2.placeholder = "Введите пароль";
    inp1.classList.remove("ma");
    inp2.classList.remove("ma");
    inp3.classList.remove("ma");
    inp3.placeholder = "Адрес электронной почты";
  }
});

btn1.addEventListener("click", (event) => {
  event.preventDefault();
  if (inp1.value.length < 8) {
    inp1.classList.add("eror");
    inp1.classList.remove("ma");
    warning.classList.add("warning--active");
    erorSpan.classList.add("eror-span--active");
    contRight.classList.add("gap22");
    btnHelp.classList.add("btn-help--active");
  } else if (!inp1.value.match(/@/)) {
    inp1.classList.add("eror");
    inp1.classList.remove("ma");
    warning.classList.add("warning--active");
    erorSpan.classList.add("eror-span--active");
    contRight.classList.add("gap22");
    btnHelp.classList.add("btn-help--active");
  } else if (inp1.value.length >= 8) {
    warning.classList.remove("warning--active");
    erorSpan.classList.remove("eror-span--active");
    inp1.classList.remove("eror");
    inp1.value = "";
    contRight.style.display = "none";
    contRightTwo.classList.remove("forma-none");
    contBot.classList.add("mt");
    inp1.classList.remove("ma");
    contRight.classList.remove("gap22");
    btnHelp.classList.remove("btn-help--active");
    ContTitleBlock.textContent = "Введите пароль";
  }
});
btn2.onclick = function () {
  if (inp2.value.length < 8) {
    inp2.classList.add("eror");
    btn2.href = "#";
    inp2.classList.remove("ma");
    warning2.classList.add("warning--active");
    erorSpan2.classList.add("eror-span--active");
    btnHelp2.classList.add("btn-help--active");
    contRightTwo.classList.add("gap23");
  }
  if (inp2.value.length >= 8) {
    inp2.classList.remove("eror");
    btn2.href = "/index.html";
    inp2.classList.remove("ma");
    erorSpan2.classList.remove("eror-span--active");
    warning2.classList.remove("warning--active");
    btnHelp2.classList.remove("btn-help--active");
    contRightTwo.classList.remove("gap23");
  }
};
btn3.onclick = function () {
  if (inp3.value.length < 8) {
    inp3.classList.add("eror");
    btn3.href = "#";
    warning3.classList.add("warning--active");
    erorSpan3.classList.add("eror-span--active");
    inp3.classList.remove("ma");
  } else if (!inp3.value.match(/@/)) {
    inp3.classList.add("eror");
    btn3.href = "#";
    erorSpan3.classList.add("eror-span--active");
    inp3.classList.remove("ma");
    warning3.classList.add("warning--active");
  } else if (inp3.value.length >= 8) {
    warning3.classList.remove("warning--active");
    inp3.classList.remove("eror");
    erorSpan3.classList.remove("eror-span--active");
    contRightThree.classList.add("forma-none");
    contRightFour.classList.remove("forma-none");
    ContTitleBlock.textContent = "Введите код";
  }
};

inp4s.forEach((inp) => {
  inp.onclick = function () {
    inp.classList.add("mh");
  };
  inp.addEventListener("keyup", function () {
    if (inp.value.length == 1) {
      inp.classList.add("mh");
      inp.nextElementSibling.focus();
      inp.classList.remove("eror-red");
    } else if (inp.nextElementSibling == null) return;
  });
  inp.addEventListener("input", () => {
    if (inp.value.length > 0) {
      btn4.parentElement.removeAttribute("disabled");
    } else {
      btn4.parentElement.setAttribute("disabled", true);
    }
  });
});
btn4.onclick = function () {
  inp4s.forEach((inp) => {
    if (inp.value == "") {
      btn4.href = "#";
      inp.classList.add("eror-red");
    } else {
      btn4.href = "/index.html";
      inp.classList.remove("eror-red");
      inp.classList.add("mh");
    }
  });
};
smena.addEventListener("click", (event) => {
  event.preventDefault();
  contRight.style.display = "";
  contRightTwo.classList.add("forma-none");
  contBot.classList.remove("mt");
  ContTitleBlock.textContent = "Вход CPlace";
  inp2.value = "";
  erorSpan2.classList.remove("eror-span--active");
  warning2.classList.remove("warning--active");
  inp2.classList.remove("eror");
});

password.onclick = function (event) {
  event.preventDefault();
  contRightTwo.classList.add("forma-none");
  contRightThree.classList.remove("forma-none");
  contBot.classList.remove("mt");
  contBot.classList.add("mv");
  inp2.value = "";
  inp3.classList.remove("ma");
  ContTitleBlock.textContent = "Восстановить пароль";
  erorSpan2.classList.remove("eror-span--active");
  warning2.classList.remove("warning--active");
  inp2.classList.remove("eror");
};
vhod.onclick = function (event) {
  event.preventDefault();
  contRightTwo.classList.remove("forma-none");
  contRightThree.classList.add("forma-none");
  inp3.value = "";
  contBot.classList.remove("mv");
  contBot.classList.add("mt");
  inp2.classList.remove("ma");
  ContTitleBlock.textContent = "Введите пароль";
};
vhod2.onclick = function (event) {
  event.preventDefault();
  contRightTwo.classList.remove("forma-none");
  contRightFour.classList.add("forma-none");
  inp3.value = "";
  contBot.classList.remove("mv");
  contBot.classList.add("mt");
  inp3.classList.remove("ma");
  ContTitleBlock.textContent = "Введите пароль";
};
