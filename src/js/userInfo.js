let names = sessionStorage.getItem("name");
let points = sessionStorage.getItem("points");
let times = sessionStorage.getItem("time");
document.querySelector(".name").innerHTML = names;
document.querySelector(".points").innerHTML = points;
document.querySelector(".time").innerHTML = times;

