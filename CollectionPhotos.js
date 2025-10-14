
document.addEventListener('DOMContentLoaded', function() {
    
    // Get all slides
    const slides = document.querySelectorAll('.slide');
    const leftButton = document.querySelector('.left');
    const rightButton = document.querySelector('.right');
    
    let currentSlideIndex = 0;
    const totalSlides = slides.length;
    
    // Hide all slides initially
    function hideAllSlides() {
        slides.forEach(slide => {
            slide.style.display = 'none';
        });
    }
    
    // Show specific slide by index
    function showSlide(index) {
        hideAllSlides();
        if (index >= 0 && index < totalSlides) {
            slides[index].style.display = 'block';
            currentSlideIndex = index;
        }
    }
    
    // Get slide index by year
    function getSlideIndexByYear(year) {
        const targetId = `${year}-collection`;
        for (let i = 0; i < slides.length; i++) {
            if (slides[i].id === targetId) {
                return i;
            }
        }
        return 0; // Default to first slide if not found
    }
    
    // Handle hash navigation on page load
    function handleHashNavigation() {
        const hash = window.location.hash;
        if (hash) {
            // Extract year from hash (e.g., #2006-collection -> 2006)
            const yearMatch = hash.match(/#(\d{4})-collection/);
            if (yearMatch) {
                const year = yearMatch[1];
                const slideIndex = getSlideIndexByYear(year);
                showSlide(slideIndex);
                return;
            }
        }
        // Default to first slide if no valid hash
        showSlide(0);
    }
    
    // Navigation button functionality
    function goToNextSlide() {
        const nextIndex = (currentSlideIndex + 1) % totalSlides;
        showSlide(nextIndex);
        updateURL();
    }
    
    function goToPreviousSlide() {
        const prevIndex = (currentSlideIndex - 1 + totalSlides) % totalSlides;
        showSlide(prevIndex);
        updateURL();
    }
    
    // Update URL hash based on current slide
    function updateURL() {
        const currentSlide = slides[currentSlideIndex];
        if (currentSlide && currentSlide.id) {
            window.location.hash = `#${currentSlide.id}`;
        }
    }
    
    // Add click event listeners to navigation buttons
    if (leftButton) {
        leftButton.addEventListener('click', function(e) {
            e.preventDefault();
            goToPreviousSlide();
        });
    }
    
    if (rightButton) {
        rightButton.addEventListener('click', function(e) {
            e.preventDefault();
            goToNextSlide();
        });
    }
    
    // Handle keyboard navigation
    document.addEventListener('keydown', function(e) {
        if (e.key === 'ArrowRight') {
            goToNextSlide();
        } else if (e.key === 'ArrowLeft') {
            goToPreviousSlide();
        }
    });
    
    // Listen for hash changes (if user manually changes URL)
    window.addEventListener('hashchange', function() {
        handleHashNavigation();
    });
    
    // Listen for messages from parent window
    window.addEventListener('message', function(event) {
        if (event.data && event.data.action === 'scrollToSection') {
            const targetId = event.data.targetId;
            const yearMatch = targetId.match(/(\d{4})-collection/);
            if (yearMatch) {
                const year = yearMatch[1];
                const slideIndex = getSlideIndexByYear(year);
                showSlide(slideIndex);
            }
        }
    });
    
    // Initialize the slideshow
    handleHashNavigation();
    
    // Image gallery functionality within each slide
    function initializeImageGallery() {
        const allImages = document.querySelectorAll('.slide img');
        const fullImageContainer = document.getElementById('fullImageContainer');
        const fullImage = document.getElementById('fullImage');
        
        allImages.forEach(function(img) {
            img.addEventListener('click', function(e) {
                e.preventDefault();
                
                // Show full image
                if (fullImageContainer && fullImage) {
                    fullImage.src = this.src;
                    fullImageContainer.style.display = 'flex';
                    fullImageContainer.style.position = 'fixed';
                    fullImageContainer.style.top = '0';
                    fullImageContainer.style.left = '0';
                    fullImageContainer.style.width = '100%';
                    fullImageContainer.style.height = '100%';
                    fullImageContainer.style.backgroundColor = 'rgba(0,0,0,0.9)';
                    fullImageContainer.style.zIndex = '10000';
                    fullImageContainer.style.justifyContent = 'center';
                    fullImageContainer.style.alignItems = 'center';
                    fullImageContainer.style.cursor = 'pointer';
                    
                    fullImage.style.maxWidth = '90%';
                    fullImage.style.maxHeight = '90%';
                    fullImage.style.objectFit = 'contain';
                }
            });
            
            // Add hover effect to images
            img.style.cursor = 'pointer';
            img.addEventListener('mouseenter', function() {
                this.style.opacity = '0.8';
                this.style.transform = 'scale(1.05)';
                this.style.transition = 'all 0.3s ease';
            });
            
            img.addEventListener('mouseleave', function() {
                this.style.opacity = '1';
                this.style.transform = 'scale(1)';
            });
        });
        
        // Close full image when clicking on container
        if (fullImageContainer) {
            fullImageContainer.addEventListener('click', function() {
                this.style.display = 'none';
            });
        }
    }
    
    // Initialize image gallery
    initializeImageGallery();
});

// Additional CSS for smooth transitions
const collectionCSS = `
    .slide {
        opacity: 0;
        transition: opacity 0.5s ease-in-out;
    }
    
    .slide[style*="block"] {
        opacity: 1;
    }
    
    #fullImageContainer {
        display: none;
    }
    
    .slide img {
        transition: all 0.3s ease;
    }
    
    .slide img:hover {
        transform: scale(1.05);
        opacity: 0.8;
    }
`;

// Inject CSS
function injectCollectionCSS() {
    const style = document.createElement('style');
    style.textContent = collectionCSS;
    document.head.appendChild(style);
}

document.addEventListener('DOMContentLoaded', injectCollectionCSS);