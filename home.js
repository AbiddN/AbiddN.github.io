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

// set top margin for each sym
