
/* == Nav == */

// Mobile navigation

const btn = document.querySelector('.menu-btn');
const menu = document.querySelector('nav');

if (btn && menu) {

    btn.addEventListener('click', () => {

        menu.classList.toggle('open');
        btn.classList.toggle('change');

        btn.setAttribute(
            'aria-expanded',
            menu.classList.contains('open')
        );

    });

}


/* == Projects and Activities == */


// Project Images

const projectImages = [

    // Week 1 Images
    [
        "images/styling/coming-soon.jpg",
        "images/week1/week1-2.jpg",
        "images/week1/week1-3.jpg",
        "images/week1/week1-4.jpg",
        "images/week1/week1-5.jpg",
        "images/week1/week1-6.jpg",
        "images/week1/week1-7.jpg",
        "images/week1/week1-8.jpg",
        "images/week1/week1-9.jpg"
    ],

    // Week 2 Images
    [
        "images/week2/week2-1.jpg",
        "images/week2/week2-2.jpg",
        "images/week2/week2-3.jpg",
        "images/week2/week2-4.jpg",
        "images/week2/week2-5.jpg",
        "images/week2/week2-6.jpg"
    ],

    // Week 3 Images
    [
        "images/week3/week3-1.jpg",
        "images/week3/week3-2.jpg",
        "images/week3/week3-3.jpg",
        "images/week3/week3-4.jpg",
        "images/week3/week3-5.jpg",
        "images/week3/week3-6.jpg",
        "images/week3/week3-7.jpg",
        "images/week3/week3-8.jpg"
    ],

    // Week 4 Images
    [
        "images/week4/week4-1.jpg",
        "images/week4/week4-2.jpg",
        "images/week4/week4-3.jpg",
        "images/week4/week4-4.jpg",
        "images/week4/week4-5.jpg",
        "images/week4/week4-6.jpg"
    ]

];


// Activity Images

const activityImages = [

    // Activity 1 Images
    [
        "images/activities/activity1-1.jpg",
        "images/activities/activity1-2.jpg"
    ],

    // Activity 2 Images
    [
        "images/activities/activity2-1.jpg",
        "images/activities/activity2-2.jpg"
    ],

    // Activity 3 Images
    [
        "images/activities/activity3-1.jpg",
        "images/activities/activity3-2.jpg"
    ]

];


// Select Gallery Images

const projectPreviews = document.querySelectorAll(".project-image");


// Select Correct Image Array

const galleryImages = document.body.dataset.gallery === "activities"
    ? activityImages
    : projectImages;


// Lightbox Variables

let currentProject = 0;
let currentImage = 0;


// Create Lightbox

const lightbox = document.createElement("div");

lightbox.classList.add("lightbox");


// Create Enlarged Image

const enlargedImage = document.createElement("img");

enlargedImage.classList.add("lightbox-image");

enlargedImage.alt = "Enlarged gallery image";


// Create Close Button

const closeButton = document.createElement("button");

closeButton.textContent = "×";

closeButton.classList.add("close-button");

closeButton.setAttribute("aria-label", "Close gallery");


// Create Previous Button

const previousButton = document.createElement("button");

previousButton.textContent = "❮";

previousButton.classList.add("previous-button");

previousButton.setAttribute("aria-label", "Previous image");


// Create Next Button

const nextButton = document.createElement("button");

nextButton.textContent = "❯";

nextButton.classList.add("next-button");

nextButton.setAttribute("aria-label", "Next image");


// Create Image Counter

const imageCounter = document.createElement("p");

imageCounter.classList.add("image-counter");


// Add Elements to Lightbox

lightbox.appendChild(closeButton);

lightbox.appendChild(previousButton);

lightbox.appendChild(enlargedImage);

lightbox.appendChild(nextButton);

lightbox.appendChild(imageCounter);


// Add Lightbox to Document

document.body.appendChild(lightbox);


// Display Selected Image

function showImage() {

    enlargedImage.src = galleryImages[currentProject][currentImage];

    imageCounter.textContent =
        `${currentImage + 1} / ${galleryImages[currentProject].length}`;

}


// Open Lightbox

projectPreviews.forEach((preview) => {

    preview.addEventListener("click", () => {

        currentProject = Number(preview.dataset.project);

        currentImage = 0;

        if (!galleryImages[currentProject]) {
            return;
        }

        showImage();

        lightbox.classList.add("active");

    });

});


// Next Image

nextButton.addEventListener("click", () => {

    currentImage++;

    if (currentImage >= galleryImages[currentProject].length) {

        currentImage = 0;

    }

    showImage();

});


// Previous Image

previousButton.addEventListener("click", () => {

    currentImage--;

    if (currentImage < 0) {

        currentImage = galleryImages[currentProject].length - 1;

    }

    showImage();

});


// Close Lightbox

closeButton.addEventListener("click", () => {

    lightbox.classList.remove("active");

});


// Close When Clicking Outside Image

lightbox.addEventListener("click", (event) => {

    if (event.target === lightbox) {

        lightbox.classList.remove("active");

    }

});


// Close With Escape Key

document.addEventListener("keydown", (event) => {

    if (event.key === "Escape") {

        lightbox.classList.remove("active");

    }

});


// Navigate With Keyboard Arrows

document.addEventListener("keydown", (event) => {

    if (!lightbox.classList.contains("active")) {

        return;

    }

    if (event.key === "ArrowRight") {

        nextButton.click();

    }

    if (event.key === "ArrowLeft") {

        previousButton.click();

    }

});
