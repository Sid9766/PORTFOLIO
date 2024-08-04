const burger = document.querySelector('.burger');
const aside = document.querySelector('.left');
const logo = document.querySelector('.logo');
const navbar = document.querySelector('.navbar');
burger.addEventListener('click', () => {
aside.classList.toggle('v-class');
logo.classList.toggle('v-class');
navbar.classList.toggle('v-class');
});