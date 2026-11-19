/* == Projects  == */

// Finished Project Images


const projectImages = [

    // Album 1 Images
    [
        "images/finished-albump.jpg",
        
    ],

    // Logo 2 Images
    [
        "images/finished-logo.jpg",
    ],

    // Poster 3 Images
    [
        "images/finished-poster.jpg",
        
    ]

];


// Select Finished Project Images


const projectPreviews = document.querySelectorAll(".project-image");


// Lightbox Variables

let currentProject = 0;
let currentImage = 0;


//Create Lightbox

const lightbox = document.createElement("div");
lightbox.classList.add("lightbox");


// Create Enlarged Image

const enlargedImage = document.createElement("img");
enlargedImage.classList.add("lightbox-image");

enlargedImage.alt = "Enlarged project image";


// Create Close Button

const closeButton = document.createElement("button");

closeButton.textContent = "×";
closeButton.classList.add("close-button");

closeButton.setAttribute("aria-label", "Close gallery");

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


//Display Selected Image

function showImage() {

    enlargedImage.src = projectImages[currentProject][currentImage];

    imageCounter.textContent =
        `${currentImage + 1} / ${projectImages[currentProject].length}`;

}


// Open Lightbox

projectPreviews.forEach((preview) => {

    preview.addEventListener("click", () => {

        currentProject = Number(preview.dataset.project);

        currentImage = 0;

        showImage();

        lightbox.classList.add("active");

    });

});

//Close Lightbox

closeButton.addEventListener("click", () => {

    lightbox.classList.remove("active");

});


//Close When Clicking Outside Image


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
