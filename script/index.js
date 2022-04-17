let now = new Date();
let year = now.getFullYear();
let mounth = now.getMonth();
let mainDate = new Date(year, mounth);

let monthLength = new Date(year, mounth + 1, 0).getDate();

let calendar = document.querySelector(".calendar");
let ul = document.createElement("ul");

function createCalendar(monthLength) {
  for (let i = 0; i < monthLength; i++) {
    let li = document.createElement("li");
    li.innerHTML = i + 1;
    ul.appendChild(li);
    calendar.appendChild(ul);
  }
}
createCalendar(monthLength);

function addColor(year, mounth) {
  let nowYear = now.getFullYear();
  let nowMounth = now.getMonth();
  console.log(nowMounth, nowYear, year, mounth);
  if (nowYear === year && nowMounth === mounth) {
    let nowDay = now.getDate() - 1;
    let itemsLi = document.querySelectorAll("li");
    let li = itemsLi[nowDay];
    li.classList.add("color");
    console.log(nowDay);
  }
}
addColor(year, mounth);
let monthes = [
  "Январь",
  "Февраль",
  "Март",
  "Апрель",
  "Май",
  "Июнь",
  "Июль",
  "Август",
  "Сентябрь",
  "Октябрь",
  "Ноябрь",
  "Декабрь",
];

//----------------------------------------
let yearBlock = document.querySelector(".year");
let yearVal = document.querySelector(".year__value");

let mountBlock = document.querySelector(".mount");
let mountVal = document.querySelector(".mount__value");
let yearAndMount = document.querySelectorAll(".yearAndMount");

yearBlock.addEventListener("click", editValueYear);

function editValueYear(event) {
  let linkYear = event.target.closest(".year .link");
  let isBackYear = linkYear.classList.contains("back");
  let isForwardYear = linkYear.classList.contains("forward");

  if (isBackYear) year--;
  else if (isForwardYear) year++;
  addValue(yearVal);
  addCalendar();
  addColor(mainDate.getFullYear(), mainDate.getMonth());
}

mountBlock.addEventListener("click", editValueMount);

function editValueMount(event) {
  let linkMount = event.target.closest(".mount .link");
  let isBackMount = linkMount.classList.contains("back");
  let isForwardMount = linkMount.classList.contains("forward");

  if (isBackMount) mounth--;
  else if (isForwardMount) mounth++;
  addValue(yearVal);

  let numMounth = mainDate.getMonth();
  mountVal.innerHTML = monthes[numMounth];

  addCalendar();
  addColor(mainDate.getFullYear(), mainDate.getMonth());
}

function addValue(value) {
  mainDate = new Date(year, mounth);
  value.innerHTML = mainDate.getFullYear();
}

function addCalendar() {
  ul.innerHTML = null;
  monthLength = new Date(year, mounth + 1, 0).getDate();
  createCalendar(monthLength);
}
