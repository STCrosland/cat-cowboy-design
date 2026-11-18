// Select all project slideshows
const slideshows = document.querySelectorAll(".slideshow");

// Store images for each week
const projectImages = [
    [
        "images/week1/week1-1.jpg",
        "images/week1/week1-2.jpg",
        "images/week1/week1-3.jpg"
    ],
    [
        "images/week2/week2-1.jpg",
        "images/week2/week2-2.jpg",
        "images/week2/week2-3.jpg",
        "images/week2/week2-4.jpg",
        "images/week2/week2-5.jpg",
        "images/week2/week2-6.jpg"
    ]
];

// Create each slideshow
slideshows.forEach((slideshow, index) => {

    // Select image
    const image = slideshow.querySelector("img");

    // Track current image
    let currentImage = 0;

    // Create previous button
    const previousButton = document.createElement("button");
    previousButton.textContent = "❮";
    previousButton.classList.add("prev");
    previousButton.setAttribute("aria-label", "Previous image");

    // Create next button
    const nextButton = document.createElement("button");
    nextButton.textContent = "❯";
    nextButton.classList.add("next");
    nextButton.setAttribute("aria-label", "Next image");

    // Create image counter
    const slideCount = document.createElement("p");
    slideCount.classList.add("slide-count");

    // Add elements to slideshow
    slideshow.appendChild(previousButton);
    slideshow.appendChild(nextButton);
    slideshow.appendChild(slideCount);

    // Display selected image
    function showImage() {
        image.src = projectImages[index][currentImage];

        slideCount.textContent =
            `${currentImage + 1} / ${projectImages[index].length}`;
    }

    // Previous image
    previousButton.addEventListener("click", () => {
        currentImage--;

        if (currentImage < 0) {
            currentImage = projectImages[index].length - 1;
        }

        showImage();
    });

    // Next image
    nextButton.addEventListener("click", () => {
        currentImage++;

        if (currentImage >= projectImages[index].length) {
            currentImage = 0;
        }

        showImage();
    });

    // Display first image
    showImage();

});