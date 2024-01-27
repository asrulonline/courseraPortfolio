// Slideshow logic
let slideIndex = 0;

function showSlides() {
    const slides = document.querySelectorAll('.project');
    
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = 'none';
    }
    
    slideIndex++;
    
    if (slideIndex > slides.length) {
        slideIndex = 1;
    }
    
    slides[slideIndex - 1].style.display = 'block';
    setTimeout(showSlides, 3000); // Change slide every 3 seconds
}

// Call the function to start the slideshow
showSlides();

// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});


document.addEventListener('DOMContentLoaded', function () {
    // Add click event listeners to skills
    var skills = document.querySelectorAll('.skill');
    
    skills.forEach(function (skill) {
        skill.addEventListener('click', function () {
            this.classList.toggle('active');
        });
    });
});
