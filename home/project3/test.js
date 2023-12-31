// const prevButton = document.querySelector('.prev-button');
// const nextButton = document.querySelector('.next-button');
// let currentIndex = 0;
// let isFrontDisplayed = true; // Track whether the front is currently displayed

// function flipCard(card) {
//     card.classList.toggle('flipped');
//     isFrontDisplayed = !isFrontDisplayed; // Toggle the state when flipping the card
// }

// function showCurrentCard(flipCards) {
//     flipCards.forEach((card, index) => {
//         if (index === currentIndex) {
//             card.style.display = 'block';
//         } else {
//             card.style.display = 'none';
//         }
//     });
// }

// function loadCSVData() {
//     fetch('TestCSV.csv')
//         .then(response => response.text())
//         .then(data => {
//             const rows = data.split('\n');
//             const carouselContainer = document.getElementById('carousel-container');
//             const flipCards = [];

//             for (let i = 1; i < rows.length; i++) {
//                 const [front, back] = rows[i].split(',');

//                 if (front && back) {
//                     const flipCard = document.createElement('div');
//                     flipCard.classList.add('flipCard');

//                     const flipCardFront = document.createElement('div');
//                     flipCardFront.classList.add('flipCardFront');
//                     const frontContent = document.createElement('div');
//                     frontContent.classList.add('front-content');
//                     frontContent.textContent = front;
//                     flipCardFront.appendChild(frontContent);

//                     const flipCardBack = document.createElement('div');
//                     flipCardBack.classList.add('flipCardBack');
//                     const backContent = document.createElement('div');
//                     backContent.classList.add('back-content');
//                     backContent.textContent = back;
//                     flipCardBack.appendChild(backContent);

//                     flipCard.appendChild(flipCardFront);
//                     flipCard.appendChild(flipCardBack);
//                     carouselContainer.appendChild(flipCard);
//                     flipCards.push(flipCard);
//                 }
//             }

//             flipCards.forEach((card, index) => {
//                 card.addEventListener('click', () => {
//                     flipCard(card);
//                 });
//             });

//             showCurrentCard(flipCards);

//             nextButton.addEventListener('click', () => {
//                 if (currentIndex < flipCards.length - 1) {
//                     if (isFrontDisplayed) {
//                         flipCard(flipCards[currentIndex]);
//                     }
//                     currentIndex++;
//                     showCurrentCard(flipCards);
//                 }  
//             });

//             prevButton.addEventListener('click', () => {
//                 if (currentIndex > 0) {
//                     if (isFrontDisplayed) {
//                         flipCard(flipCards[currentIndex]);
//                     }
//                     currentIndex--;
//                     showCurrentCard(flipCards);
//                 }
//             });
//         });
// }

// loadCSVData();

const prevButton = document.querySelector('.prev-button');
const nextButton = document.querySelector('.next-button');
let currentIndex = 0;

function showFrontOfCard(card) {
    card.classList.remove('flipped');
}

function flipCard(card) {
    card.classList.toggle('flipped');
}

function showCurrentCard(flipCards) {
    flipCards.forEach((card, index) => {
        if (index === currentIndex) {
            card.style.display = 'block';
            if (currentIndex === 0) {
                showFrontOfCard(card);
            }
        } else {
            card.style.display = 'none';
        }
    });
}

function loadCSVData() {
    fetch('TestCSV.csv')
        .then(response => response.text())
        .then(data => {
            const rows = data.split('\n');
            const carouselContainer = document.getElementById('carousel-container');
            const flipCards = [];

            for (let i = 1; i < rows.length; i++) {
                const [front, back] = rows[i].split(',');

                if (front && back) {
                    const flipCard = document.createElement('div');
                    flipCard.classList.add('flipCard');

                    const flipCardFront = document.createElement('div');
                    flipCardFront.classList.add('flipCardFront');
                    const frontContent = document.createElement('div');
                    frontContent.classList.add('front-content');
                    frontContent.textContent = front;
                    flipCardFront.appendChild(frontContent);

                    const flipCardBack = document.createElement('div');
                    flipCardBack.classList.add('flipCardBack');
                    const backContent = document.createElement('div');
                    backContent.classList.add('back-content');
                    backContent.textContent = back;
                    flipCardBack.appendChild(backContent);

                    flipCard.appendChild(flipCardFront);
                    flipCard.appendChild(flipCardBack);
                    carouselContainer.appendChild(flipCard);
                    flipCards.push(flipCard);
                }
            }

            flipCards.forEach((card, index) => {
                card.addEventListener('click', () => {
                    flipCard(card);
                });
            });

            showCurrentCard(flipCards);

            nextButton.addEventListener('click', () => {
                if (currentIndex < flipCards.length - 1) {
                    currentIndex++;
                    showCurrentCard(flipCards);
                } else if (currentIndex === flipCards.length - 1) {
                    currentIndex = 0;
                    showCurrentCard(flipCards);
                }
            });

            prevButton.addEventListener('click', () => {
                if (currentIndex > 0) {
                    currentIndex--;
                    showCurrentCard(flipCards);
                } else if (currentIndex === 0) {
                    currentIndex = flipCards.length - 1;
                    showCurrentCard(flipCards);
                }
            });
        });
}

loadCSVData();