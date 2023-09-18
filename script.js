// Batool Al Tameemi, Communications Lab Fall 2023
// Individual project: 30MMF webssite 
// Java Script 


document.addEventListener('DOMContentLoaded', function () {
    // This event listener triggers when the DOM (document structure) is fully loaded and ready for manipulation.
    
    // Smooth scrolling for navigation links
    const navLinks = document.querySelectorAll('.nav-links ul li a');
    // Select all anchor elements within list items under elements with the class "nav-links."

    navLinks.forEach(link => {
        // Iterate through each selected link.
        link.addEventListener('click', function (e) {
            // Add a click event listener to each link.

            e.preventDefault();
            // Prevent the default click behavior, which would normally navigate to a different page.

            const targetId = this.getAttribute('href').substring(1);
            // Get the "href" attribute value of the clicked link and remove the "#" character to obtain the target element's ID.

            const targetElement = document.getElementById(targetId);
            // Find the element with the obtained ID.

            if (targetElement) {
                // Check if the target element exists in the DOM.

                window.scrollTo({
                    top: targetElement.offsetTop,
                    behavior: 'smooth'
                });
                // Scroll the window to the top position of the target element smoothly.
            }
        });
    });
});


        // Display/hide poems
        const poems = document.querySelectorAll('.poem'); // Select all elements with class "poem"
        const poemContent = document.getElementById('poem-content'); // Get the element with id "poem-content"
        const poemTitle = document.getElementById('poem-title'); // Get the element with id "poem-title"
        const poemText = document.getElementById('poem-text'); // Get the element with id "poem-text"

        poems.forEach(poem => { // Iterate over each "poem" element
            poem.addEventListener('click', function () { // Add a click event listener
                const title = poem.querySelector('h2').textContent; // Get the text content of the "h2" element inside the clicked poem
                const text = poem.querySelector('p').textContent; // Get the text content of the "p" element inside the clicked poem
                poemTitle.textContent = title; // Set the title in the "poem-title" element
                poemText.textContent = text; // Set the text in the "poem-text" element
                poemContent.style.display = 'block'; // Display the "poem-content" element
                window.scrollTo({
                    top: poemContent.offsetTop - 20, // Scroll to the "poem-content" element with a small offset
                    behavior: 'smooth'
                });
            });
        });

        // Close poem content
        const closePoem = document.getElementById('poem-content'); // Get the element with id "poem-content"
        closePoem.addEventListener('click', function () { // Add a click event listener to "poem-content"
            poemContent.style.display = 'none'; // Hide the "poem-content" element
        });

        // Sticky navigation bar
        const header = document.querySelector('.header'); // Get the element with class "header"
        const nav = document.querySelector('nav'); // Get the "nav" element
        const navLinksContainer = document.querySelector('.nav-links'); // Get the element with class "nav-links"
        const navLinksList = document.querySelector('.nav-links ul'); // Get the "ul" element inside "nav-links"

        window.addEventListener('scroll', function () { // Add a scroll event listener to the window
            if (window.scrollY > header.offsetHeight) { // Check if the scroll position is below the header's height
                nav.classList.add('sticky-nav'); // Add the class "sticky-nav" to the navigation element
                navLinksContainer.classList.add('nav-links-sticky'); // Add the class "nav-links-sticky" to the "nav-links" element
                navLinksList.style.flexDirection = 'column'; // Change the flex direction to column
            } else {
                nav.classList.remove('sticky-nav'); // Remove the class "sticky-nav" from the navigation element
                navLinksContainer.classList.remove('nav-links-sticky'); // Remove the class "nav-links-sticky" from the "nav-links" element
                navLinksList.style.flexDirection = 'row'; // Change the flex direction back to row
            }
        });

        // Adding a fade-in animation to h1 elements when they are in the viewport
        const observer = new IntersectionObserver(entries => { // Create an IntersectionObserver
            entries.forEach(entry => { // Iterate over the observed entries
                if (entry.isIntersecting) { // Check if an element is intersecting with the viewport
                    entry.target.classList.add('fade-in'); // Add the class "fade-in" to the intersecting element
                    // Do not unobserve the element to prevent fading out
                }
            });
        }, {
            threshold: 0.3 // Adjust this threshold as needed
        });

        const h1Elements = document.querySelectorAll('h1'); // Select all "h1" elements
        h1Elements.forEach(h1 => {
            observer.observe(h1); // Observe each "h1" element
        });
