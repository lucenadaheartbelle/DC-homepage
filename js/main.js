class CompilationNavigator {
    constructor() {
        // Track current indices for photos and videos
        this.currentPhotoIndex = 1;
        this.currentVideoIndex = 1;
        
        // Total number of compilations
        this.totalPhotoCompilations = 4;
        this.totalVideoCompilations = 5;
        
        // Initialize the navigator
        this.init();
    }
    
    init() {
        // Show first compilation by default
        this.showPhotoCompilation(1);
        this.showVideoCompilation(1);
        
        // Add event listeners to navigation buttons
        this.addEventListeners();
    }
    
    addEventListeners() {
        // Photo navigation buttons
        const photoPrevBtn = document.getElementById('photo-prev-btn');
        const photoNextBtn = document.getElementById('photo-next-btn');
        
        if (photoPrevBtn) {
            photoPrevBtn.addEventListener('click', () => this.navigatePhotos('prev'));
        }
        
        if (photoNextBtn) {
            photoNextBtn.addEventListener('click', () => this.navigatePhotos('next'));
        }
        
        // Video navigation buttons
        const videoPrevBtn = document.getElementById('video-prev-btn');
        const videoNextBtn = document.getElementById('video-next-btn');
        
        if (videoPrevBtn) {
            videoPrevBtn.addEventListener('click', () => this.navigateVideos('prev'));
        }
        
        if (videoNextBtn) {
            videoNextBtn.addEventListener('click', () => this.navigateVideos('next'));
        }
    }
    
    navigatePhotos(direction) {
        if (direction === 'prev') {
            this.currentPhotoIndex = this.currentPhotoIndex > 1 ? 
                this.currentPhotoIndex - 1 : this.totalPhotoCompilations;
        } else if (direction === 'next') {
            this.currentPhotoIndex = this.currentPhotoIndex < this.totalPhotoCompilations ? 
                this.currentPhotoIndex + 1 : 1;
        }
        
        this.showPhotoCompilation(this.currentPhotoIndex);
        this.updatePhotoCounter();
    }
    
    navigateVideos(direction) {
        if (direction === 'prev') {
            this.currentVideoIndex = this.currentVideoIndex > 1 ? 
                this.currentVideoIndex - 1 : this.totalVideoCompilations;
        } else if (direction === 'next') {
            this.currentVideoIndex = this.currentVideoIndex < this.totalVideoCompilations ? 
                this.currentVideoIndex + 1 : 1;
        }
        
        this.showVideoCompilation(this.currentVideoIndex);
        this.updateVideoCounter();
    }
    
    showPhotoCompilation(index) {
        // Hide all photo compilations
        for (let i = 1; i <= this.totalPhotoCompilations; i++) {
            const compilation = document.querySelector(`.compilation-photos${i === 1 ? '' : '-' + i}`);
            if (compilation) {
                compilation.style.display = 'none';
                
                // Hide all child elements
                const elements = compilation.querySelectorAll('h4, li, img, p');
                elements.forEach(el => el.style.display = 'none');
            }
        }
        
        // Show the selected photo compilation
        const targetClass = index === 1 ? '.compilation-photos' : `.compilation-photos-${index}`;
        const targetCompilation = document.querySelector(targetClass);
        
        if (targetCompilation) {
            targetCompilation.style.display = 'flex';
            
            // Show all child elements
            const elements = targetCompilation.querySelectorAll('h4, li, img, p');
            elements.forEach(el => {
                if (el.tagName.toLowerCase() === 'li') {
                    el.style.display = 'block';
                } else if (el.tagName.toLowerCase() === 'img') {
                    el.style.display = 'block';
                } else if (el.tagName.toLowerCase() === 'p') {
                    el.style.display = 'block';
                } else if (el.tagName.toLowerCase() === 'h4') {
                    el.style.display = 'block';
                }
            });
        }
    }
    
    showVideoCompilation(index) {
        // Hide all video compilations
        for (let i = 1; i <= this.totalVideoCompilations; i++) {
            const compilation = document.querySelector(`.compilation-videos${i === 1 ? '' : '-' + i}`);
            if (compilation) {
                compilation.style.display = 'none';
                
                // Hide all child elements
                const elements = compilation.querySelectorAll('h4, li, img, p');
                elements.forEach(el => el.style.display = 'none');
            }
        }
        
        // Show the selected video compilation
        const targetClass = index === 1 ? '.compilation-videos' : `.compilation-videos-${index}`;
        const targetCompilation = document.querySelector(targetClass);
        
        if (targetCompilation) {
            targetCompilation.style.display = 'flex';
            
            // Show all child elements
            const elements = targetCompilation.querySelectorAll('h4, li, img, p');
            elements.forEach(el => {
                if (el.tagName.toLowerCase() === 'li') {
                    el.style.display = 'block';
                } else if (el.tagName.toLowerCase() === 'img') {
                    el.style.display = 'block';
                } else if (el.tagName.toLowerCase() === 'p') {
                    el.style.display = 'block';
                } else if (el.tagName.toLowerCase() === 'h4') {
                    el.style.display = 'block';
                }
            });
        }
    }
    
    updatePhotoCounter() {
        const counter = document.getElementById('photo-counter');
        if (counter) {
            counter.textContent = `${this.currentPhotoIndex} / ${this.totalPhotoCompilations}`;
        }
    }
    
    updateVideoCounter() {
        const counter = document.getElementById('video-counter');
        if (counter) {
            counter.textContent = `${this.currentVideoIndex} / ${this.totalVideoCompilations}`;
        }
    }
    
    // Public methods to manually navigate
    goToPhotoCompilation(index) {
        if (index >= 1 && index <= this.totalPhotoCompilations) {
            this.currentPhotoIndex = index;
            this.showPhotoCompilation(index);
            this.updatePhotoCounter();
        }
    }
    
    goToVideoCompilation(index) {
        if (index >= 1 && index <= this.totalVideoCompilations) {
            this.currentVideoIndex = index;
            this.showVideoCompilation(index);
            this.updateVideoCounter();
        }
    }
}

// Initialize the navigator when the DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    window.compilationNavigator = new CompilationNavigator();
});

// Alternative initialization if DOMContentLoaded has already fired
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', function() {
        window.compilationNavigator = new CompilationNavigator();
    });
} else {
    window.compilationNavigator = new CompilationNavigator();
}


// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    
    // Get popup elements
    const popupContainer = document.getElementById('pop-up-container');
    const popup = document.getElementById('pop-up');
    const closeButton = document.querySelector('.close-button i');
    const iframe = document.getElementById('Iframe');
    
    // Get all photo elements that should trigger the popup
    const photoElements = document.querySelectorAll('.compilation-photos li, .compilation-photos-2 li, .compilation-photos-3 li, .compilation-photos-4 li');
    
    // Function to extract year from element class name
    function getYearFromElement(element) {
        const classList = element.classList;
        for (let className of classList) {
            const yearMatch = className.match(/(\d{4})/);
            if (yearMatch) {
                return yearMatch[1];
            }
        }
        return null;
    }
    
    // Function to show popup with specific year
    function showPopup(year = null) {
        popupContainer.style.display = 'flex';
        popupContainer.style.justifyContent = 'center';
        popupContainer.style.alignItems = 'center';
        popupContainer.style.position = 'fixed';
        popupContainer.style.top = '0';
        popupContainer.style.left = '0';
        popupContainer.style.width = '100%';
        popupContainer.style.height = '100%';
        popupContainer.style.backgroundColor = 'rgba(0, 0, 0, 0.8)';
        popupContainer.style.zIndex = '9999';
            
        // Set iframe source with year-specific hash if provided
        let iframeSrc = 'CollectionPhotos.html';
        if (year) {
            iframeSrc += `#${year}-collection`;
        }
        iframe.src = iframeSrc;
        
        // Disable body scrolling
        document.body.style.overflow = 'hidden';
    }
    
    
    // Function to hide popup
    function hidePopup() {
        popupContainer.style.display = 'none';
        iframe.src = ''; // Clear iframe source to stop any loading
        
        // Re-enable body scrolling
        document.body.style.overflow = 'auto';
    }
    
    // Add click event listeners to all photo/video elements
    photoElements.forEach(function(element) {
        element.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Get the year from the clicked element
            const year = getYearFromElement(element);
            console.log('Clicked year:', year); // Debug log
            
            // Show popup with specific year
            showPopup(year);
        });
        
        // Add hover effect for better UX
        element.style.cursor = 'pointer';
        element.addEventListener('mouseenter', function() {
            this.style.opacity = '0.8';
            this.style.transform = 'scale(1.02)';
            this.style.transition = 'all 0.3s ease';
        });
        
        element.addEventListener('mouseleave', function() {
            this.style.opacity = '1';
            this.style.transform = 'scale(1)';
        });
    });
    
    // Close popup when close button is clicked
    closeButton.addEventListener('click', function(e) {
        e.stopPropagation();
        hidePopup();
    });
    
    // Close popup when clicking outside the popup content
    popupContainer.addEventListener('click', function(e) {
        if (e.target === popupContainer) {
            hidePopup();
        }
    });
    
    // Close popup with Escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && popupContainer.style.display === 'flex') {
            hidePopup();
        }
    });
    
    // Initially hide the popup
    hidePopup();
    
    // Wait for iframe to load and then scroll to the correct section
    iframe.addEventListener('load', function() {
        // Send message to iframe to navigate to specific section if needed
        const currentSrc = iframe.src;
        const hashIndex = currentSrc.indexOf('#');
        if (hashIndex !== -1) {
            const targetId = currentSrc.substring(hashIndex + 1);
            
            // Try to communicate with iframe to scroll to target
            try {
                iframe.contentWindow.postMessage({
                    action: 'scrollToSection',
                    targetId: targetId
                }, '*');
            } catch (error) {
                console.log('Cross-origin iframe communication not available');
            }
        }
    });
    
    // Listen for messages from the iframe
    window.addEventListener('message', function(event) {
        // Handle messages from iframe
        if (event.data === 'closePopup') {
            hidePopup();
        }
    });
});


//vid

document.addEventListener('DOMContentLoaded', function() {
    
    // Get popup elements
    const popupContainer = document.getElementById('pop-up-container');
    const popup = document.getElementById('pop-up');
    const closeButton = document.querySelector('.close-button i');
    const iframe = document.getElementById('Iframe');
    
    // Get all photo elements that should trigger the popup
    const videoElements = document.querySelectorAll('.compilation-videos li, .compilation-videos-2 li, .compilation-videos-3 li, .compilation-videos-4 li, .compilation-videos-5 li');
    
    // Function to extract year from element class name
    function getYearFromElement(element) {
        const classList = element.classList;
        for (let className of classList) {
            const yearMatch = className.match(/(\d{4})/);
            if (yearMatch) {
                return yearMatch[1];
            }
        }
        return null;
    }
    
    // Function to show popup with specific year
    function showPopup(year = null) {
        popupContainer.style.display = 'flex';
        popupContainer.style.justifyContent = 'center';
        popupContainer.style.alignItems = 'center';
        popupContainer.style.position = 'fixed';
        popupContainer.style.top = '0';
        popupContainer.style.left = '0';
        popupContainer.style.width = '100%';
        popupContainer.style.height = '100%';
        popupContainer.style.backgroundColor = 'rgba(0, 0, 0, 0.8)';
        popupContainer.style.zIndex = '9999';
            
        // Set iframe source with year-specific hash if provided
        let iframeSrc = 'CollectionVideos.html';
        if (year) {
            iframeSrc += `#performances-${year}`;
        }
        iframe.src = iframeSrc;
        
        // Disable body scrolling
        document.body.style.overflow = 'hidden';
    }
    
    // Function to hide popup
    function hidePopup() {
        popupContainer.style.display = 'none';
        iframe.src = ''; // Clear iframe source to stop any loading
        
        // Re-enable body scrolling
        document.body.style.overflow = 'auto';
    }
    
    // Add click event listeners to all photo/video elements
    videoElements.forEach(function(element) {
        element.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Get the year from the clicked element
            const year = getYearFromElement(element);
            console.log('Clicked year:', year); // Debug log
            
            // Show popup with specific year
            showPopup(year);
        });
        
        // Add hover effect for better UX
        element.style.cursor = 'pointer';
        element.addEventListener('mouseenter', function() {
            this.style.opacity = '0.8';
            this.style.transform = 'scale(1.02)';
            this.style.transition = 'all 0.3s ease';
        });
        
        element.addEventListener('mouseleave', function() {
            this.style.opacity = '1';
            this.style.transform = 'scale(1)';
        });
    });
    
    // Close popup when close button is clicked
    closeButton.addEventListener('click', function(e) {
        e.stopPropagation();
        hidePopup();
    });
    
    // Close popup when clicking outside the popup content
    popupContainer.addEventListener('click', function(e) {
        if (e.target === popupContainer) {
            hidePopup();
        }
    });
    
    // Close popup with Escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && popupContainer.style.display === 'flex') {
            hidePopup();
        }
    });
    
    // Initially hide the popup
    hidePopup();
    
    // Wait for iframe to load and then scroll to the correct section
    iframe.addEventListener('load', function() {
        // Send message to iframe to navigate to specific section if needed
        const currentSrc = iframe.src;
        const hashIndex = currentSrc.indexOf('#');
        if (hashIndex !== -1) {
            const targetId = currentSrc.substring(hashIndex + 1);
            
            // Try to communicate with iframe to scroll to target
            try {
                iframe.contentWindow.postMessage({
                    action: 'scrollToSection',
                    targetId: targetId
                }, '*');
            } catch (error) {
                console.log('Cross-origin iframe communication not available');
            }
        }
    });
    
    // Listen for messages from the iframe
    window.addEventListener('message', function(event) {
        // Handle messages from iframe
        if (event.data === 'closePopup') {
            hidePopup();
        }
    });
});

// Additional CSS that should be added to your stylesheet
const additionalCSS = `
    #pop-up-container {
        display: none;
    }
    
    // .compilation-photos li,
    // .compilation-photos-2 li,
    // .compilation-photos-3 li,
    // .compilation-photos-4 li,
    .compilation-videos li,
    .compilation-videos-2 li,
    .compilation-videos-3 li,
    .compilation-videos-4 li,
    .compilation-videos-5 li {
        transition: all 0.3s ease;
    }
    
    // .compilation-photos li:hover,
    // .compilation-photos-2 li:hover,
    // .compilation-photos-3 li:hover,
    // .compilation-photos-4 li:hover,
    .compilation-videos li:hover,
    .compilation-videos-2 li:hover,
    .compilation-videos-3 li:hover,
    .compilation-videos-4 li:hover,
    .compilation-videos-5 li:hover {
        transform: translateY(-5px);
        box-shadow: 0 5px 15px rgba(0,0,0,0.3);
    }
`;

// Function to inject CSS
function injectCSS() {
    const style = document.createElement('style');
    style.textContent = additionalCSS;
    document.head.appendChild(style);
}

// Inject CSS when DOM is loaded

document.addEventListener('DOMContentLoaded', injectCSS);

