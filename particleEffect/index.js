

document.addEventListener('DOMContentLoaded', () => {
    const canvas = document.getElementById('canvas')
    const cursor = document.getElementById('cursor')
    const ctx = canvas.getContext('2d')
    canvas.height = window.innerHeight
    canvas.width = window.innerWidth


    window.addEventListener('mousemove', (e) => {
        console.log(e)

        cursor.style.left = e.clientX + 'px'
        cursor.style.top = e.clientY + 'px'
    })
})