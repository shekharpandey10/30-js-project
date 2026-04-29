
window.document.addEventListener("DOMContentLoaded", () => {
    const removeBtn = document.querySelector('.remove-btn')
    const inputBody = document.querySelector('.body-container')
    const addBtn = document.querySelector('.add-btn')
    const finalBtn = document.querySelector('.finalBtn')
    const overlay = document.querySelector('.overlay')
    const xBtn = document.querySelector('.x-btn')
    const addTitle = document.getElementById('add-title')
    const fieldType = document.querySelector('.fieldType')

    console.log(inputBody.lastElementChild)
    xBtn.addEventListener('click', () => {
        overlay.classList.remove('overlay-on')
    })
    finalBtn.addEventListener('click', () => {
        const placeholder = addTitle.value;
        if (!placeholder.trim()) return
        const type = fieldType.value

        const input = document.createElement('input')
        input.type = type;
        input.placeholder = placeholder
        inputBody.appendChild(input)
        overlay.classList.remove('overlay-on')
        addTitle.value = ''
    })

    addBtn.addEventListener('click', () => {
        overlay.classList.add('overlay-on')
    })
    removeBtn.addEventListener('click', () => {
        if (inputBody.lastElementChild)
            inputBody.lastElementChild.remove()
    })
})
