let userName = prompt("Adınızı Yazınız?");

let myName = document.querySelector("#myName");
myName.innerHTML = userName;

let myClock = document.querySelector("#myClock");
const date = new Date();

const days = [
  "Pazar",
  "Pazartesi",
  "Salı",
  "Çarşamba",
  "Perşembe",
  "Cuma",
  "Cumartesi",
];

myClock.innerHTML = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()} ${
  days[date.getDay()]
}`;
