// Automatic Slideshow
let slideIndex = 0;
const slides = document.querySelectorAll(".slides img");

function showSlides(index) {
    slides.forEach(slide => (slide.style.display = "none"));
    if (index >= slides.length) slideIndex = 0;
    if (index < 0) slideIndex = slides.length - 1;
    slides[slideIndex].style.display = "block";
}

document.querySelector(".next").addEventListener("click", () => {
    slideIndex++;
    showSlides(slideIndex);
});

document.querySelector(".prev").addEventListener("click", () => {
    slideIndex--;
    showSlides(slideIndex);
});

showSlides(slideIndex);
setInterval(() => {
    slideIndex++;
    showSlides(slideIndex);
}, 3000);

// Collapsible Section
document.querySelectorAll(".collapsible").forEach(button => {
    button.addEventListener("click", () => {
        const content = button.nextElementSibling;
        content.style.display = content.style.display === "block" ? "none" : "block";
        button.textContent = content.style.display === "block" ? "Click to Collapse" : "Click to Expand";
    });
});

// Progress Bar Interaction
let progressWidth = 0;
document.getElementById("increase-progress").addEventListener("click", () => {
    if (progressWidth < 100) {
        progressWidth += 10;
        document.querySelector(".progress").style.width = `${progressWidth}%`;
    }
});

// Form Feedback
document.querySelector(".form-on-image form").addEventListener("submit", event => {
    event.preventDefault();
    document.getElementById("form-feedback").textContent = "Form submitted successfully!";
});
