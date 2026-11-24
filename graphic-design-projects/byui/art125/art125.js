
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
    Array.from({ length: 5}, (_, i) => `images/projects/week1/week1-${i + 1}.jpg`),


    // Week 2 Images
    Array.from({ length: 5 }, (_, i) => `images/projects/week2/week2-${i + 1}.jpg`),


    // Week 3 Images
    Array.from({ length: 14 }, (_, i) => `images/projects/week3/week3-${i + 1}.jpg`),


    // Week 4 Images
    Array.from({ length: 14 }, (_, i) => `images/projects/week4/week4-${i + 1}.jpg`),


    // Week 5 Images
    Array.from({ length: 14 }, (_, i) => `images/projects/week5/week5-${i + 1}.jpg`),


    // Week 6 Images
    Array.from({ length: 14 }, (_, i) => `images/projects/week6/week6-${i + 1}.jpg`),


    // Week 7 Images
    Array.from({ length: 14 }, (_, i) => `images/projects/week7/week7-${i + 1}.jpg`),


    // Week 8 Images
    Array.from({ length: 14 }, (_, i) => `images/projects/week8/week8-${i + 1}.jpg`),


    // Week 9 Images
    Array.from({ length: 14 }, (_, i) => `images/projects/week9/week9-${i + 1}.jpg`),


    // Week 10 Images
    Array.from({ length: 14 }, (_, i) => `images/projects/week10/week10-${i + 1}.jpg`),


    // Week 11 Images
    Array.from({ length: 14 }, (_, i) => `images/projects/week11/week11-${i + 1}.jpg`),


    // Week 12 Images
    Array.from({ length: 14 }, (_, i) => `images/projects/week12/week12-${i + 1}.jpg`)


];


// Activity Images

const activityImages = [

    // Activity 1 Images
    Array.from({ length: 5 }, (_, i) => `images/activities/activity1-${i + 1}.jpg`),

    // Activity 2 Images
        Array.from({ length: 5 }, (_, i) => `images/activities/activity2-${i + 1}.jpg`),


    // Activity 3 Images
        Array.from({ length: 5 }, (_, i) => `images/activities/activity3-${i + 1}.jpg`),


    // Activity 4 Images
        Array.from({ length: 5 }, (_, i) => `images/activities/activity4-${i + 1}.jpg`),


    // Activity 5 Images
        Array.from({ length: 5 }, (_, i) => `images/activities/activity5-${i + 1}.jpg`),


    // Activity 6 Images
        Array.from({ length: 5 }, (_, i) => `images/activities/activity6-${i + 1}.jpg`),


    // Activity 7 Images
       Array.from({ length: 5 }, (_, i) => `images/activities/activity7-${i + 1}.jpg`),


    // Activity 8 Images
        Array.from({ length: 5 }, (_, i) => `images/activities/activity8-${i + 1}.jpg`),


    // Activity 9 Images
       Array.from({ length: 5 }, (_, i) => `images/activities/activity9-${i + 1}.jpg`),


    // Activity 10 Images
        Array.from({ length: 5 }, (_, i) => `images/activities/activity10-${i + 1}.jpg`),


    // Activity 11 Images
        Array.from({ length: 5 }, (_, i) => `images/activities/activity11-${i + 1}.jpg`),


    // Activity 12 Images
        Array.from({ length: 5 }, (_, i) => `images/activities/activity12-${i + 1}.jpg`)


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
