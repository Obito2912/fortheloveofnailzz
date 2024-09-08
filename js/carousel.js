// Select elements
const track = document.querySelector('.carousel__container_track');
const slides = Array.from(track.children);
const nextButton = document.querySelector('.carousel__button-right');
const prevButton = document.querySelector('.carousel__button-left');
const navIndicators = document.querySelectorAll('.carousel__nav_indicator');

// Get the width of each slide
const slideWidth = slides[0].getBoundingClientRect().width;

// Arrange slides next to one another
const setSlidePosition = (slide, index) => {
    slide.style.left = `${slideWidth * index}px`;
};
slides.forEach(setSlidePosition);

// Function to move the slide
const moveToSlide = (track, currentSlide, targetSlide) => {
    track.style.transform = `translateX(-${targetSlide.style.left})`;
    currentSlide.classList.remove('current-slide');
    targetSlide.classList.add('current-slide');
};

// Function to update indicator
const updateIndicators = (currentIndicator, targetIndicator) => {
    currentIndicator.classList.remove('current-slide');
    targetIndicator.classList.add('current-slide');
};

// Move to the next slide
nextButton.addEventListener('click', () => {
    const currentSlide = track.querySelector('.current-slide');
    const nextSlide = currentSlide.nextElementSibling;
    const currentIndicator = document.querySelector('.carousel__nav .current-slide');
    const nextIndicator = currentIndicator.nextElementSibling;

    if (nextSlide) {
        moveToSlide(track, currentSlide, nextSlide);
        updateIndicators(currentIndicator, nextIndicator);
    }
});

// Move to the previous slide
prevButton.addEventListener('click', () => {
    const currentSlide = track.querySelector('.current-slide');
    const prevSlide = currentSlide.previousElementSibling;
    const currentIndicator = document.querySelector('.carousel__nav .current-slide');
    const prevIndicator = currentIndicator.previousElementSibling;

    if (prevSlide) {
        moveToSlide(track, currentSlide, prevSlide);
        updateIndicators(currentIndicator, prevIndicator);
    }
});

// Handle navigation click events for the indicators
navIndicators.forEach((indicator, index) => {
    indicator.addEventListener('click', () => {
        const currentSlide = track.querySelector('.current-slide');
        const targetSlide = slides[index];
        const currentIndicator = document.querySelector('.carousel__nav .current-slide');

        moveToSlide(track, currentSlide, targetSlide);
        updateIndicators(currentIndicator, indicator);
    });
});