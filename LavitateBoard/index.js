

document.addEventListener('DOMContentLoaded', () => {
    const LavitateContainer = document.querySelector('.container')
    const row = 15;
    const column = 21

    const getRandomColor = () => {
        return `#${Math.floor(Math.random() * 0xffffff).toString(16).padStart(6, '0')}`;

    }


    const renderBoard = () => {
        for (let i = 0; i < row; i++) {
            const div = document.createElement('div')
            div.classList.add('container-line')
            for (let j = 0; j < column; j++) {
                const span = document.createElement('span')
                span.classList.add('list-span')
                span.addEventListener('mouseenter', () => {
                    span.style.backgroundColor = getRandomColor()
                })
                span.addEventListener('mouseleave', () => {
                    span.style.backgroundColor = ''
                })
                div.append(span)
            }
            LavitateContainer.appendChild(div)
        }
    }
    renderBoard()
})