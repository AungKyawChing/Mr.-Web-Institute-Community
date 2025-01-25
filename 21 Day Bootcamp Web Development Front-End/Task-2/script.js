document.addEventListener("DOMContentLoaded", () => {
    const petFeatures = [
        { image: "image1.png", description: "German Breed Alsatian Puppies" },
        { image: "image2.png", description: "Leaving Bed For Puppies" },
        { image: "image3.png", description: "Cat Food" },
        { image: "image4.png", description: "Pet's Clothes" },
        { image: "image4.png", description: "Nick Belts For Puppies" },
    ]
    const imageContainer = document.getElementById("imageContainer")
    const indicatorsContainer = document.getElementById("carouselIndicators")
    petFeatures.forEach(({ image, description }) => {imageContainer.innerHTML += `<div class="image-item"><div class="image-div"><img src="${image}" alt="${description}"></div><p>${description}</p></div>`})
    for (let i = 0; i < 3; i++) {indicatorsContainer.innerHTML += `<div class="indicator" data-index="${i}"><div>`}
    const indicators = document.querySelectorAll(".indicator")
    indicators[0].classList.add("active")
    let activeIndex = 0
    function setActiveIndicator(index) {
        indicators.forEach((indicator, i) => {indicator.classList.toggle("active", i === index)})
    }
    function rotateCarousel() {
        activeIndex = (activeIndex + 1) % indicators.length
        setActiveIndicator(activeIndex)
    }
    indicators.forEach((indicator, index) => {
        indicator.addEventListener("click", () => setActiveIndicator(index))
        indicator.addEventListener("mouseenter", () => setActiveIndicator(index))
    })
    setInterval(rotateCarousel, 500)
})