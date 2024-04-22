function startGame() {
    // Redirects to the story page
    console.log('Starting the game...');
    window.location.href = 'story.html';
}
const options = document.querySelectorAll('input[name="path"]');
const goButton = document.getElementById('goButton');

options.forEach(option => {
    option.addEventListener('change', () => {
        goButton.disabled = false;
        options.forEach(opt => {
            opt.parentElement.classList.remove('selected');
        });
        option.parentElement.classList.add('selected');
    });
});

// goButton.addEventListener('click', () => {
//     const selectedOption = document.querySelector('input[name="path"]:checked');
//     if (selectedOption) {
//         const path = selectedOption.value;
//         // Navigate to the next page based on the selected path
//         if (path === 'left') {
//             window.location.href = 'valley.html'; // Replace with the path for the Valley of Mist
//         } else if (path === 'right') {
//             window.location.href = 'grove.html'; // Replace with the path for the Sunlit Grove
//         }
//     }
// });
// const goButton = document.getElementById('goButton'); // Assuming 'goButton' is the ID of your button

// If the button exists, then you can safely add the event listener
if (goButton) {
    goButton.addEventListener('click', () => {
        const selectedOption = document.querySelector('input[name="path"]:checked');
        if (selectedOption) {
            const path = selectedOption.value;
            // Navigate to the next page based on the selected path
            if (path === 'left') {
                window.location.href = 'valley.html'; // Replace with the path for the Valley of Mist
            } else if (path === 'right') {
                window.location.href = 'grove.html'; // Replace with the path for the Sunlit Grove
            }
        }
    });
}
const options2 = document.querySelectorAll('input[name="action"]');
const goButton2 = document.getElementById('goButton');

options2.forEach(option => {
    option.addEventListener('change', () => {
        goButton.disabled = false;
        options2.forEach(opt => {
            opt.parentElement.classList.remove('selected');
        });
        option.parentElement.classList.add('selected');
    });
});

if (goButton2) {
    goButton2.addEventListener('click', () => {
        const selectedOption = document.querySelector('input[name="action"]:checked');
        if (selectedOption) {
            const action = selectedOption.value;
            if (action === 'sing') {
                const answer = prompt('The song echoes through the grove. A spirit tells her 6 letters that spell a word that will take her further ("i s w d m o") What word does it spell?');
                if (answer && answer.toLowerCase() === 'wisdom') {
                    alert('Congratulations! Mio deciphers the inscription and finds a map hidden beneath, leading to the next part of the adventure.');
                    window.location.href = 'hidden-path.html';
                } else {
                    alert('Incorrect answer. Try again!');
                }
            } else if (action === 'search') {
                const answer = prompt('Mio finds a mysterious inscription on a stone. It has 6 letters ("i s w d m o") What word does it spell?');
                if (answer && answer.toLowerCase() === 'wisdom') {
                    alert('Congratulations! Mio deciphers the inscription and finds a map hidden beneath, leading to the next part of the adventure.');
                    window.location.href = 'hidden-path.html';
                } else {
                    alert('Incorrect answer. Try again!');
                }
            }
        }
    });
}
let selectedImages = [];

function selectImage(imageNumber) {
    const image = document.getElementById(`piece${imageNumber}`);
    if (!selectedImages.includes(imageNumber)) {
        selectedImages.push(imageNumber);
        image.classList.add('selected');
        updateNumbering();
    } else {
        const index = selectedImages.indexOf(imageNumber);
        selectedImages.splice(index, 1);
        image.classList.remove('selected');
        updateNumbering();
    }
}

function updateNumbering() {
    const pieces = document.querySelectorAll('.puzzle-piece');
    pieces.forEach(piece => {
        piece.style.border = 'none';
        const imageNumber = Number(piece.id.slice(-1));
        if (selectedImages.includes(imageNumber)) {
            piece.style.border = '2px solid #ff0000'; // Red border for selected images
            piece.alt = selectedImages.indexOf(imageNumber) + 1;
        }
    });
}

function checkOrder() {
    if (selectedImages.length === 4 && selectedImages.every((value, index) => value === index + 1)) {
        alert('Congratulations! You arranged the images correctly.');
        // Redirect to the next page
        window.location.href = 'hidden-path.html';
    } else {
        alert('Incorrect order. Please arrange the images correctly.');
        resetSelection();
    }
}

function resetSelection() {
    selectedImages = [];
    const pieces = document.querySelectorAll('.puzzle-piece');
    pieces.forEach(piece => {
        piece.classList.remove('selected');
        piece.style.border = 'none';
        piece.alt = '';
    });
}
function choosePath(option) {
    if (option === 'dark') {
        document.body.style.backgroundColor = '#333'; // Dark background color
        window.location.href = 'dark-ending.html'; // Redirect to the Dark Ending page
    } else if (option === 'light') {
        document.body.style.backgroundColor = '#fff'; // Light background color
        window.location.href = 'light-ending.html'; // Redirect to the Light Ending page
    }
}

