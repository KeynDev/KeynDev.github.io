// Parse the URL to extract query parameters
const urlParams = new URLSearchParams(window.location.search);
const queryIdentifier = urlParams.get("instance");

// Fetch the JSON data
fetch("data.json")
    .then(response => response.json())
    .then(data => {
        // Check if the page exists
        if (data[queryIdentifier]) {
            const section = data[queryIdentifier];
            // Update content
            document.getElementById("project-title").innerHTML = `
                <div class="title">${section.title}</div>
            `;

            // Append thumbnails to the "Thumbnails" section
            const thumbnailsSection = document.getElementById("thumbnails");
            thumbnailsSection.innerHTML = ""; // Clear any existing content

            section.images.forEach((image) => {
                const thumbnail = document.createElement("img");
                thumbnail.classList.add("thumbnail");
                thumbnail.src = image.url;
                thumbnail.alt = image.description;
                thumbnailsSection.appendChild(thumbnail);
            });

            // Add click event listeners to thumbnails
            const thumbnails = document.querySelectorAll('.thumbnail'); // Use '.thumbnail'
            const mainImage = document.getElementById('mainImage');
            const description = document.getElementById('description');

            // Set the main image to the URL of the first thumbnail
            if (thumbnails.length > 0) {
                mainImage.src = thumbnails[0].src;
                mainImage.alt = thumbnails[0].alt;
                description.textContent = `${thumbnails[0].alt}.`;
            }

            thumbnails.forEach(thumbnail => {
                thumbnail.addEventListener('click', () => {
                    mainImage.src = thumbnail.src;
                    mainImage.alt = thumbnail.alt;
                    description.textContent = `${thumbnail.alt}.`;
                });
            });
        } else {
            // If the page doesn't exist:
            document.getElementById("content").innerHTML = `
                <div class="title">Not Found</div>
                <div class="subtitle">The current URL identifier is not one of the provided links :(</div>
            `;
        }
    })
    .catch(error => {
        console.error("Error loading data:", error);
    });
