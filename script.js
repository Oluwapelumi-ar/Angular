const body = document.querySelector('body')
const header = document.querySelector('header')
const card = document.querySelectorAll('.card')
const cardText = document.querySelector('.card-text')
const details = document.querySelector('.details')
const change = document.querySelector('.change')

const handleChange = () => {
    body.classList.toggle('dark-mode')
    header.classList.toggle('header-dark')
    card.forEach(item => item.classList.toggle('card-dark'))
    cardText.classList.toggle('card-text-dark')
    
}

change.addEventListener('click', handleChange)