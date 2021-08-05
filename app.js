const menu = document.querySelector('.menu-icon');

const navbar = document.querySelector('.mobileNav');


const list = document.querySelectorAll('a');
menu.onclick = function () {
    if (navbar.style.height === '0vh') {
        navbar.style.height = '100vh';
    } else {
        navbar.style.height = '0vh' 
    }
}


list.forEach(function(e) {
    e.addEventListener('click', function () {
        navbar.style.height = '0vh';
    })
});
