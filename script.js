document.addEventListener("DOMContentLoaded", function() {
    const images = [
        { src: 'img/1.jpg', name: 'Custom Name 1' },
        { src: 'img/2.jpg', name: 'Custom Name 2' },
        { src: 'img/3.jpg', name: 'Custom Name 3' },
        { src: 'img/4.jpg', name: 'Custom Name 4' },
        { src: 'img/5.jpg', name: 'Custom Name 5' },
        { src: 'img/6.jpg', name: 'Custom Name 6' },
        { src: 'img/7.jpg', name: 'Custom Name 7' },
        { src: 'img/8.jpg', name: 'Custom Name 8' },
        { src: 'img/9.jpg', name: 'Custom Name 9' },
        { src: 'img/10.jpg', name: 'Custom Name 10' },
        { src: 'img/11.jpg', name: 'Custom Name 11' },
        { src: 'img/12.jpg', name: 'Custom Name 12' },
        { src: 'img/13.jpg', name: 'Custom Name 13' },
        { src: 'img/14.jpg', name: 'Custom Name 14' },
        { src: 'img/15.jpg', name: 'Custom Name 15' },
        { src: 'img/16.jpg', name: 'Custom Name 16' },
        { src: 'img/17.jpg', name: 'Custom Name 17' },
        { src: 'img/18.jpg', name: 'Custom Name 18' },
        { src: 'img/19.jpg', name: 'Custom Name 19' },
        { src: 'img/20.jpg', name: 'Custom Name 20' },
        { src: 'img/21.jpg', name: 'Custom Name 21' },
    ];

    const imagesContainer = document.getElementById("images-container");
    const loadMoreButton = document.getElementById("load-more");
    let currentImageIndex = 0;

    function loadImages(count) {
        for (let i = 0; i < count; i++) {
            if (currentImageIndex >= images.length) {
                loadMoreButton.style.display = 'none';
                break;
            }
            const imageItem = document.createElement("div");
            imageItem.className = "image-item";
            
            const imageUrl = images[currentImageIndex].src;
            const imageName = images[currentImageIndex].name;

            imageItem.innerHTML = `
                <img src="${imageUrl}" alt="${imageName}">
                <p>${imageName}</p>
            `;
            
            imagesContainer.appendChild(imageItem);
            currentImageIndex++;

            // Trigger the transition by adding the 'visible' class after appending the element
            setTimeout(() => {
                imageItem.classList.add('visible');
            }, 100); // Delay to ensure the item is added to the DOM
        }
    }

    loadMoreButton.addEventListener("click", function() {
        loadImages(6);
    });

    loadImages(6);
});
