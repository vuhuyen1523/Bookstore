const smallImg = document.querySelectorAll('.under-big-img div img');
const bigImg = document.querySelector('.big-img');

window.addEventListener('DOMContentLoaded', () => {
    smallImg[0].parentElement.classList.add('actives');
});

smallImg.forEach((imgage) => {
    imgage.addEventListener('click', () => {
        bigImg.querySelector('img').src = imgage.src;
        resetActive();
        imgage.parentElement.classList.add('actives');
    });
});

function resetActive() {
    smallImg.forEach((img) => {
        img.parentElement.classList.remove('actives');
    });
}