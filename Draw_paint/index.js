document.addEventListener('DOMContentLoaded', () => {
    const canvas = document.querySelector('.main-container');
    const Eraser = document.getElementById('Eraser');
    const Color = document.getElementById('Color');
    const Stroke = document.getElementById('Stroke');

    const ctx = canvas.getContext('2d');

    const canvasOffsetX = canvas.offsetLeft;
    const canvasOffsetY = canvas.offsetTop;

    canvas.width = window.innerWidth - canvasOffsetX;
    canvas.height = window.innerHeight - canvasOffsetY;

    let isPainting = false;

    ctx.lineWidth = 5;
    ctx.strokeStyle = "#000";


    Eraser.addEventListener('click', () => {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
    });


    Color.addEventListener('change', (e) => {
        ctx.strokeStyle = e.target.value;
    });

    Stroke.addEventListener('change', e => {
        ctx.lineWidth = e.target.value;
    });

    canvas.addEventListener('mousedown', e => {
        isPainting = true;
        ctx.beginPath();
        ctx.moveTo(
            e.clientX - canvasOffsetX,
            e.clientY - canvasOffsetY
        );
    });

    canvas.addEventListener('mousemove', e => {
        if (!isPainting) return;

        ctx.lineTo(
            e.clientX - canvasOffsetX,
            e.clientY - canvasOffsetY
        );
        ctx.stroke();
    });

    canvas.addEventListener('mouseup', () => {
        isPainting = false;
        ctx.closePath();
    });
});