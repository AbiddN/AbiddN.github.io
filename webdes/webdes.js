let k1 = document.querySelector(".k1");
let k2 = document.querySelector(".k2");
let k3 = document.querySelector(".k3");
let k4 = document.querySelector(".k4");
let k5 = document.querySelector(".k5");

let target = document.getElementById("target");
let judul = document.getElementById("judul");

console.log(target);

k1.addEventListener("click", function() {
  target.src = "materi/mat1.pdf";
  judul.innerHTML = "Introduction";
});

k2.addEventListener("click", function() {
  target.src = "materi/mat2.pdf";
  judul.innerHTML = "The Basic";
});

k3.addEventListener("click", function() {
  target.src = "materi/mat3.pdf";
  judul.innerHTML = "Link and Images";
});

k4.addEventListener("click", function() { 
  target.src = "materi/mat4.pdf";
  judul.innerHTML = "This is CSS";
});

k5.addEventListener("click", function() {
  target.src = "materi/mat5.pdf";
  judul.innerHTML = "CSS Box Model";
});