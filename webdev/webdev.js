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
  judul.innerHTML = "Node.js dan Asinkron I/O & Event";
});

k2.addEventListener("click", function() {
  target.src = "materi/mat2.pdf";
  judul.innerHTML = "Server HTTP Dasar dan Server File Statis";
});

k3.addEventListener("click", function() {
  target.src = "materi/mat3.pdf";
  judul.innerHTML = "Pemrosesan Data Form HTML";
});

k4.addEventListener("click", function() { 
  target.src = "materi/mat4.pdf";
  judul.innerHTML = "Module NPM";
});

k5.addEventListener("click", function() {
  target.src = "materi/mat5.pdf";
  judul.innerHTML = "Express.js";
});