console.log("Hello Teddy");

let k1 = document.querySelector(".k1");
let k2 = document.querySelector(".k2");
let k3 = document.querySelector(".k3");
let k4 = document.querySelector(".k4");
let k5 = document.querySelector(".k5");

let target = document.getElementById("target");

console.log(target);

k1.addEventListener("click", function() {
  target.src = "materi/mat1.pdf";
});

k2.addEventListener("click", function() {
  target.src = "materi/mat2.pdf";
});