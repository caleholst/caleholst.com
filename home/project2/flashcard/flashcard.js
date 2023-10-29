const prevButton = document.querySelector('.prev-button');
const nextButton = document.querySelector('.next-button');
let currentIndex = 0;

function flipCard(card) {
    card.classList.toggle('flipped');
}

function showCurrentCard(flipCards) {
    flipCards.forEach((card, index) => {
        if (index === currentIndex) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });
}

function loadCSVData() {
    fetch('top100VocabCSV.csv')
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
                    flipCardFront.textContent = front;

                    const flipCardBack = document.createElement('div');
                    flipCardBack.classList.add('flipCardBack');
                    flipCardBack.textContent = back;

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