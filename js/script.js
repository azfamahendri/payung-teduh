const burger = document.querySelector('.burger input');
const nav = document.querySelector('.nav-links');

burger.addEventListener('click', function () {
    nav.classList.toggle('slide')
});
