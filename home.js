let bg = document.querySelector('.sec1');
let temp = document.querySelector('#bgt');

let logo = document.querySelector('.bottom .logo');
let bottom = document.querySelector('.bottom');

let sym = document.getElementsByClassName('sym');
let rect = document.querySelector('.rect');
let box = document.getElementsByClassName('box');
let stars = document.querySelector('.stars');

window.onload = function () {
    bg.style.height = temp.clientHeight + 'px';
    bottom.style.height = (logo.clientHeight + 0.1*window.innerHeight) + 'px';
    // set top margin for each sym
    for (let i = 0; i < sym.length; i++) {
        sym[i].style.marginTop = (0.25*rect.height) + 'px';
    }
    stars.style.height = (4*rect.height) + 'px';
}

window.addEventListener('resize', function () {
    bg.style.height = temp.clientHeight + 'px';
    bottom.style.height = (logo.clientHeight + 0.1*window.innerHeight) + 'px';
    // set top margin for each sym
    for (let i = 0; i < sym.length; i++) {
        sym[i].style.marginTop = (0.25*rect.height) + 'px';
    }
    stars.style.height = (4*rect.height) + 'px';
})

let symbol = document.getElementsByClassName('sym');
let rectangle = document.getElementsByClassName('rect');

symbol[0].addEventListener('click', function () {
    window.location.href = "webdev/webdev.html";
})

symbol[1].addEventListener('click', function () {
    window.location.href = "gamedev/gamedev.html";
})

symbol[2].addEventListener('click', function () {
    window.location.href = "datsi/datsi.html";
})

symbol[3].addEventListener('click', function () {
    window.location.href = "cp/cp.html";
})

symbol[4].addEventListener('click', function () {
    window.location.href = "webdes/webdes.html";
})

for (let i = 0; i < symbol.length; i++) {
    symbol[i].addEventListener('mouseover', function () {
        rectangle[i].style.transform = 'rotate(45deg)';
    })
    symbol[i].addEventListener('mouseout', function () {
        rectangle[i].style.transform = 'rotate(0deg)';
    })
}

let button = document.querySelectorAll('button')[1];

button.addEventListener('click', function () {
    window.location.href = "about/about.html";
})