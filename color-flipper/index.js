const colors = ['green', 'red', 'rgba(133, 122, 200)', '#f15025']
const btn = document.querySelector('#btn')
const color = document.querySelector('.color')
const title = document.querySelector('#title')

function getRandomNumber() {
    return Math.floor(Math.random() * colors.length)
}

btn.addEventListener('click', () => {
    // get random number between 0 - 3
    const randomNumber = getRandomNumber()
    document.body.style.backgroundColor = colors[randomNumber]
    color.textContent = colors[randomNumber]
    title.style.color = colors[randomNumber]
})