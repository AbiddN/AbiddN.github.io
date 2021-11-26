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

let gamedev = document.getElementsByClassName('sym');

gamedev[0].addEventListener('click', function () {
    window.location.href = "webdev/webdev.html";
})

gamedev[1].addEventListener('click', function () {
    window.location.href = "gamedev/gamedev.html";
})

gamedev[2].addEventListener('click', function () {
    window.location.href = "datsi/datsi.html";
})

gamedev[3].addEventListener('click', function () {
    window.location.href = "cp/cp.html";
})

gamedev[4].addEventListener('click', function () {
    window.location.href = "webdes/webdes.html";
})