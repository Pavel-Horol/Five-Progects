// TODO сделать так что бы при выборе слайда фон сайта менялся на размытую картинку этого слайда

const slides    = document.querySelectorAll('.slide')
const body      = document.querySelector('body')

for (const slide of slides) {
    slide.addEventListener('click', () => {
        clearActiveClasses()
        slide.classList.add('active')
        let bg = slide.style.backgroundImage;
        body.style.backgroundImage = bg;
    })
}
function clearActiveClasses(){
    slides.forEach((slide) => {
        slide.classList.remove('active')
    })
}