/* == Nav == */

// Mobile navigation
const btn = document.querySelector('.menu-btn');
const menu = document.querySelector('nav');

btn.addEventListener('click', () => {
    menu.classList.toggle('open');
    btn.classList.toggle('change');
});

/* == Projects == */


// Select Finished Project Images

const projectPreviews = document.querySelectorAll(".project-image");


// Create Lightbox

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


// Add Elements to Lightbox

lightbox.appendChild(closeButton);

lightbox.appendChild(enlargedImage);


// Add Lightbox to Document

document.body.appendChild(lightbox);


// Open Lightbox

projectPreviews.forEach((preview) => {

    preview.addEventListener("click", () => {

        enlargedImage.src = preview.src;

        enlargedImage.alt = preview.alt;

        lightbox.classList.add("active");

    });

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



