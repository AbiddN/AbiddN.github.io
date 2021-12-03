let k1 = document.querySelector(".k1");
let k2 = document.querySelector(".k2");
let k3 = document.querySelector(".k3");
let k4 = document.querySelector(".k4");
let k5 = document.querySelector(".k5");

let pdf = document.getElementById("pdf");
let yt = document.getElementById("yt");
let judul = document.getElementById("judul");

window.onload = function() {
  yt.style.display = "none";
}

k1.addEventListener("click", function() {
  pdf.style.display = "";
  pdf.src = "materi/mat1.pdf";
  yt.style.display = "none";
  judul.innerHTML = "Introduction to Game Development";
});

k2.addEventListener("click", function() {
  yt.style.display = "";
  pdf.style.display = "none";
  yt.src = "https://www.youtube.com/embed/E6A4WvsDeLE";
  judul.innerHTML = "Learn UNITY in 17 Minutes";
});

k3.addEventListener("click", function() {
  yt.style.display = "";
  pdf.style.display = "none";
  yt.src = "https://www.youtube.com/embed/IFayQioG71A";
  judul.innerHTML = "Learn C# Basics in 10 Minutes";
});

k4.addEventListener("click", function() { 
  yt.style.display = "";
  pdf.style.display = "none";
  yt.src = "https://www.youtube.com/embed/lfR7Qj04-UA";
  judul.innerHTML = "The Ultimate Pixel Art Tutorial";
});

k5.addEventListener("click", function() {
  yt.style.display = "";
  pdf.style.display = "none";
  yt.src = "https://www.youtube.com/embed/_RIsfVOqTaE";
  judul.innerHTML = "How to make UI in UNITY";
});