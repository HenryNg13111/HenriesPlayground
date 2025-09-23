let SlideIndex = 1
let slides = document.getElementsByClassName("slide");
let dots = document.getElementsByClassName("dot");
showSlides(SlideIndex)

const moveSlidePrev = document.getElementById("moveSlidePrev")
moveSlidePrev.addEventListener("click",()=>{
    moveSlide(-1)
})

const moveSlideNext = document.getElementById("moveSlideNext")
moveSlideNext.addEventListener("click",()=>{
    moveSlide(1)
})

const currentOne = document.getElementById("currentOne")
currentOne.addEventListener("click",()=>{
    currentSlide(1)
})
const currentTwo = document.getElementById("currentTwo")
currentTwo.addEventListener("click",()=>{
    currentSlide(2)
})
const currentThree = document.getElementById("currentThree")
currentThree.addEventListener("click",()=>{
    currentSlide(3)
})
function moveSlide(n) {
    console.log("Moving")
    showSlides(SlideIndex += n)
}
function currentSlide(n) {
    console.log("Current")
    showSlides(SlideIndex = n)
}
function showSlides(n) {
    let i;
    console.log("Showing")
    if (n > slides.length) { SlideIndex = 1 }
    if (n < 1) { SlideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none"
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[SlideIndex - 1].style.display = "block";
    dots[SlideIndex - 1].className += " active";
}