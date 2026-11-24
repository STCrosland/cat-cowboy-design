
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
        "images/projects/week1/week1-1.jpg",
        "images/projects/week1/week1-2.jpg",
        "images/projects/week1/week1-3.jpg",
        "images/projects/week1/week1-4.jpg",
        "images/projects/week1/week1-5.jpg"
        
    ],

    // Week 2 Images
    [   "images/projects/week1/week2-1.jpg",
        "images/projects/week1/week2-2.jpg",
        "images/projects/week1/week2-3.jpg",
        "images/projects/week1/week2-4.jpg",
        "images/projects/week1/week2-5.jpg"
    ],

    // Week 3 Images
    [
        "images/projects/week1/week3-1.jpg",
        "images/projects/week1/week3-2.jpg",
        "images/projects/week1/week3-3.jpg",
        "images/projects/week1/week3-4.jpg",
        "images/projects/week1/week3-5.jpg"
    ],

    // Week 4 Images
    [
        "images/projects/week1/week4-1.jpg",
        "images/projects/week1/week4-2.jpg",
        "images/projects/week1/week4-3.jpg",
        "images/projects/week1/week4-4.jpg",
        "images/projects/week1/week4-5.jpg"
    ]

    // Week 5 Images
    [
        "images/projects/week1/week5-1.jpg",
        "images/projects/week1/week5-2.jpg",
        "images/projects/week1/week5-3.jpg",
        "images/projects/week1/week5-4.jpg",
        "images/projects/week1/week5-5.jpg"
    ]

    // Week 6 Images
    [
        "images/projects/week1/week6-1.jpg",
        "images/projects/week1/week6-2.jpg",
        "images/projects/week1/week6-3.jpg",
        "images/projects/week1/week6-4.jpg",
        "images/projects/week1/week6-5.jpg"
    ]
    
    // Week 7 Images
    [
        "images/projects/week1/week7-1.jpg",
        "images/projects/week1/week7-2.jpg",
        "images/projects/week1/week7-3.jpg",
        "images/projects/week1/week7-4.jpg",
        "images/projects/week1/week7-5.jpg"
    ]
    
    // Week 8 Images
    [
        "images/projects/week1/week8-1.jpg",
        "images/projects/week1/week8-2.jpg",
        "images/projects/week1/week8-3.jpg",
        "images/projects/week1/week8-4.jpg",
        "images/projects/week1/week8-5.jpg"
    ]
    
    // Week 9 Images
    [
        "images/projects/week1/week9-1.jpg",
        "images/projects/week1/week9-2.jpg",
        "images/projects/week1/week9-3.jpg",
        "images/projects/week1/week9-4.jpg",
        "images/projects/week1/week9-5.jpg"
    ]
    
    // Week 10 Images
    [
        "images/projects/week1/week10-1.jpg",
        "images/projects/week1/week40-2.jpg",
        "images/projects/week1/week10-3.jpg",
        "images/projects/week1/week10-4.jpg",
        "images/projects/week1/week10-5.jpg"
    ]
    
    // Week 11 Images
    [
        "images/projects/week1/week11-1.jpg",
        "images/projects/week1/week11-2.jpg",
        "images/projects/week1/week11-3.jpg",
        "images/projects/week1/week11-4.jpg",
        "images/projects/week1/week11-5.jpg"
    ]
    
    // Week 12 Images
    [
        "images/projects/week1/week12-1.jpg",
        "images/projects/week1/week12-2.jpg",
        "images/projects/week1/week12-3.jpg",
        "images/projects/week1/week12-4.jpg",
        "images/projects/week1/week12-5.jpg"
    ]

];


// Activity Images

const activityImages = [

    // Activity 1 Images
    [
        "images/activities/activity1-1.jpg",
        "images/activities/activity1-2.jpg",
        "images/activities/activity1-3.jpg",
        "images/activities/activity1-4.jpg"
    ],

    // Activity 2 Images
    [
        "images/activities/activity2-1.jpg",
        "images/activities/activity2-2.jpg",
        "images/activities/activity2-3.jpg",
        "images/activities/activity2-4.jpg"
    ],

    // Activity 3 Images
    [
        "images/activities/activity3-1.jpg",
        "images/activities/activity3-2.jpg",
        "images/activities/activity3-3.jpg",
        "images/activities/activity3-4.jpg"
    ]

    // Activity 4 Images
    [
        "images/activities/activity4-1.jpg",
        "images/activities/activity4-2.jpg",
        "images/activities/activity4-3.jpg",
        "images/activities/activity4-4.jpg"
    ]

    // Activity 5 Images
    [
        "images/activities/activity5-1.jpg",
        "images/activities/activity5-2.jpg",
        "images/activities/activity5-3.jpg",
        "images/activities/activity5-4.jpg"
    ]

    // Activity 6 Images
    [
        "images/activities/activity6-1.jpg",
        "images/activities/activity6-2.jpg",
        "images/activities/activity6-3.jpg",
        "images/activities/activity6-4.jpg"
    ]

    // Activity 7 Images
    [
        "images/activities/activity7-1.jpg",
        "images/activities/activity7-2.jpg",
        "images/activities/activity7-3.jpg",
        "images/activities/activity7-4.jpg"
    ]

    // Activity 8 Images
    [
        "images/activities/activity8-1.jpg",
        "images/activities/activity8-2.jpg",
        "images/activities/activity8-3.jpg",
        "images/activities/activity8-4.jpg"
    ]

    // Activity 9 Images
    [
        "images/activities/activity9-1.jpg",
        "images/activities/activity9-2.jpg",
        "images/activities/activity9-3.jpg",
        "images/activities/activity9-4.jpg"
    ]

    // Activity 10 Images
    [
        "images/activities/activity10-1.jpg",
        "images/activities/activity10-2.jpg",
        "images/activities/activity10-3.jpg",
        "images/activities/activity10-4.jpg"
    ]

    // Activity 11 Images
    [
        "images/activities/activity11-1.jpg",
        "images/activities/activity11-2.jpg",
        "images/activities/activity11-3.jpg",
        "images/activities/activity11-4.jpg"
    ]

    // Activity  Images
    [
        "images/activities/activity12-1.jpg",
        "images/activities/activity12-2.jpg",
        "images/activities/activity12-3.jpg",
        "images/activities/activity12-4.jpg"
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
