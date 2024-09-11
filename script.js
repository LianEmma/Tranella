document.addEventListener('DOMContentLoaded', () => {
    const popupOpen = document.getElementById('popup-open');
    const popupClose = document.getElementById('popup-close');
    const wrapper = document.querySelector('.wrapper');
    const letter = document.querySelector('.envelop .letter');
    const floatText = document.getElementById('float');
    const openSound = document.getElementById('open-sound');
    const closeSound = document.getElementById('close-sound');

    // Function to show and hide pop-ups
    function showPopup(popup, delay) {
        popup.classList.add('show-popup');
        setTimeout(() => {
            popup.classList.remove('show-popup');
        }, delay);
    }

    // Show the "click to open the envelope" pop-up initially
    showPopup(popupOpen, 10000); // Display for 10 seconds

    // Show the "tap to close the envelope" pop-up after 10 seconds
    setTimeout(() => {
        showPopup(popupClose, 10000); // Display for another 10 seconds
    }, 10000); // Delay showing "close" pop-up by 10 seconds

    // Handle click to open and close the envelope
    wrapper.addEventListener('click', (event) => {
        // Prevent closing the envelope if the letter is clicked
        if (event.target === letter) {
            return;
        }

        if (!wrapper.classList.contains('open')) {
            wrapper.classList.add('open'); // Open the envelope
            openSound.play(); // Play opening sound
            popupOpen.classList.remove('show-popup'); // Remove the "open" pop-up

            // Delay floating text appearance until envelope fully opens
            setTimeout(() => {
                floatText.style.opacity = 1; // Make floating text visible
            }, 1500); // Delay corresponds to the animation duration of the envelope opening
        } else {
            wrapper.classList.remove('open'); // Close the envelope
            closeSound.play(); // Play closing sound
            floatText.style.opacity = 0; // Hide floating text
            popupClose.classList.remove('show-popup'); // Remove the "close" pop-up
        }
    });
});
