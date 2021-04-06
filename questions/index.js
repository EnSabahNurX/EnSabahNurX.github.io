// using selectors inside the element

// selecting all questions
const questions = document.querySelectorAll('.question')
// looping throught all questions
questions.forEach(q => {
    // selecting button from each question
    const btn = q.querySelector('.question-btn')
    // linten do button
    btn.addEventListener('click', () => {
        // looping throught all question
        questions.forEach(item => {
            // checking if the current item is different form the current article
            if (item !== q) {
                // in case, just remove the 'show-text' class
                item.classList.remove('show-text')
            }
        })
        // toggling the txt on the especific question where belong this button
        q.classList.toggle('show-text')
    })
})

// traversing the DOM - simple aproach

// const btns = document.querySelectorAll('.question-btn')
// btns.forEach(btn => {
//     btn.addEventListener('click', (e) => {
//         const question = e.currentTarget.parentElement.parentElement
//         question.classList.toggle('show-text')
//     })
// })