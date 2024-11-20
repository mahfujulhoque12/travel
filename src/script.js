document.addEventListener("DOMContentLoaded", function () {
    function initializeCarousel(carouselId, prevBtnId, nextBtnId) {
        const carouselInner = document.getElementById(carouselId);
        const prevBtn = document.getElementById(prevBtnId);
        const nextBtn = document.getElementById(nextBtnId);
        const totalSlides = carouselInner.children.length;
        let currentIndex = 0;

        // Update carousel position and button states
        function updateCarousel() {
            carouselInner.style.transform = `translateX(-${currentIndex * 100}%)`;

            // Disable/Enable buttons based on the current slide
            prevBtn.disabled = currentIndex === 0;
            nextBtn.disabled = currentIndex === totalSlides - 1;

            // Style buttons to indicate disabled state
            prevBtn.classList.toggle("opacity-50", currentIndex === 0);
            prevBtn.classList.toggle("cursor-not-allowed", currentIndex === 0);
            nextBtn.classList.toggle("opacity-50", currentIndex === totalSlides - 1);
            nextBtn.classList.toggle("cursor-not-allowed", currentIndex === totalSlides - 1);
        }

        // Previous Button
        prevBtn.addEventListener("click", () => {
            if (currentIndex > 0) {
                currentIndex -= 1;
                updateCarousel();
            }
        });

        // Next Button
        nextBtn.addEventListener("click", () => {
            if (currentIndex < totalSlides - 1) {
                currentIndex += 1;
                updateCarousel();
            }
        });

        // Initialize Carousel
        updateCarousel();
    }

    // Initialize Client Carousel
    initializeCarousel("client-carousel", "client-prev-btn", "client-next-btn");
});





// form  validation
document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent the form from submitting the traditional way

    // Simple client-side validation
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const subject = document.getElementById("subject").value;
    const message = document.getElementById("message").value;

    if (!name || !email || !phone || !subject || !message) {
        alert("All fields are required.");
        return;
    }

    // If validation is successful, you can handle the form submission here.
    alert("Form submitted successfully!");
    // Here you would typically send the form data to a server using an AJAX request.
});


document.getElementById("send-message-btn").addEventListener("click", function () {
    const contactSection = document.getElementById("contact");
    contactSection.scrollIntoView({ behavior: "smooth" });
});



document.getElementById('showMoreBtn').addEventListener('click', function() {
    // Get all the hidden cards
    const hiddenCards = document.querySelectorAll('#gallery .card.hidden');
    
    // Reveal all hidden cards
    hiddenCards.forEach(card => {
        card.classList.remove('hidden');
    });

    // Hide the 'Show More' button after it is clicked
    this.classList.add('hidden');
});