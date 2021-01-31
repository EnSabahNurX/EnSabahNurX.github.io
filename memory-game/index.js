document.addEventListener('DOMContentLoaded', () => {
    // card options
    const cardsArrays = [
        {
            name: 'fries',
            img: 'images/fries.png'
        },
        {
            name: 'cheeseburger',
            img: 'images/cheeseburger.png'
        },
        {
            name: 'hotdog',
            img: 'images/hotdog.png'
        },
        {
            name: 'ice-cream',
            img: 'images/ice-cream.png'
        },
        {
            name: 'milkshake',
            img: 'images/milkshake.png'
        },
        {
            name: 'pizza',
            img: 'images/pizza.png'
        },
        {
            name: 'fries',
            img: 'images/fries.png'
        },
        {
            name: 'cheeseburger',
            img: 'images/cheeseburger.png'
        },
        {
            name: 'hotdog',
            img: 'images/hotdog.png'
        },
        {
            name: 'ice-cream',
            img: 'images/ice-cream.png'
        },
        {
            name: 'milkshake',
            img: 'images/milkshake.png'
        },
        {
            name: 'pizza',
            img: 'images/pizza.png'
        }
    ]

    cardsArrays.sort(() => 0.5 - Math.random())

    const grid = document.querySelector('.grid')
    const resultDisplay = document.querySelector('#result')
    let score = 0
    let cardsChosen = []
    let cardsChosenIds = []
    let cardsWon = []

    function createBoard() {
        for (let i = 0; i < cardsArrays.length; i++) {
            const card = document.createElement('img')
            card.setAttribute('src', 'images/blank.png')
            card.setAttribute('data-id', i)
            card.addEventListener('click', flipCard)
            grid.appendChild(card)
        }
    }

    function flipCard() {
        let cardId = this.getAttribute('data-id')
        cardsChosen.push(cardsArrays[cardId].name)
        cardsChosenIds.push(cardId)
        this.setAttribute('src', cardsArrays[cardId].img)
        if (cardsChosen.length === 2) {
            setTimeout(checkForMatch, 500);
        }
    }

    function checkForMatch() {
        const cards = document.querySelectorAll('img')
        const optionOneId = cardsChosenIds[0]
        const optionTwoId = cardsChosenIds[1]
        if (optionOneId == optionTwoId) {
            // alert('You have clicked the same card!')
            cards[optionOneId].setAttribute('src', 'images/blank.png')
            cards[optionTwoId].setAttribute('src', 'images/blank.png')
            score -= 3
        } else if (cardsChosen[0] === cardsChosen[1]) {
            // alert('You have found a match!')
            cards[optionOneId].setAttribute('src', 'images/white.png')
            cards[optionTwoId].setAttribute('src', 'images/white.png')
            cards[optionOneId].removeEventListener('click', flipCard)
            cards[optionTwoId].removeEventListener('click', flipCard)
            cardsWon.push(cardsChosen)
            score += 10
        } else {
            cards[optionOneId].setAttribute('src', 'images/blank.png')
            cards[optionTwoId].setAttribute('src', 'images/blank.png')
            score -= 3
            // alert('Sorry, try again!')
        }

        cardsChosen = []
        cardsChosenIds = []
        resultDisplay.innerHTML = ` ${score} points.`
        if (cardsWon.length === cardsArrays.length / 2) {
            resultDisplay.innerHTML = ` Congratulations!!! You have won with ${score} points.`
        }
    }
    createBoard()
})