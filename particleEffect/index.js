

const canvas = document.getElementById('canvas')
const cursor = document.getElementById('cursor')
const ctx = canvas.getContext('2d')
let patricleArray
canvas.height = window.innerHeight
canvas.width = window.innerWidth

const mouse = {
    x: null,
    y: null,
    radius: (canvas.height / 80) * (canvas.width / 80)
}
window.addEventListener('mousemove', (e) => {

    mouse.x = e.x
    mouse.y = e.y
})



class Particle {
    constructor(x, y, directionX, directionY, size, color) {
        this.x = x;
        this.y = y;
        this.directionX = directionX;
        this.directionY = directionY;
        this.size = size;
        this.color = color
    }

    draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2, false)
        ctx.fillStyle = '#fff'
        ctx.fill()
    }

    update() {
        if (this.x > canvas.width || this.x < 0) {
            this.directionX = -this.directionX
        }

        if (this.y > canvas.height || this.y < 0) {
            this.directionY = -this.directionY
        }

        let opecityValue = 1
        let dx = mouse.x - this.x;
        let dy = mouse.y - this.y;
        let dis = Math.sqrt(dx * dx + dy * dy)

        if (dis < mouse.radius + this.size) {
            if (mouse.x < this.size && this.x < canvas.width - this.size * 10) {
                this.x += 10
            }
            if (mouse.x > this.x && this.x > this.size * 10) {
                this.x -= 10
            }
            if (mouse.y < this.y && this.y < canvas.height - this.size * 10) {
                this.y += 10
            }
            if (mouse.y > this.y && this.y > this.size * 10) {
                this.y -= 10
            }
        }

        this.x += this.directionX
        this.y += this.directionY
        this.draw()
    }
}


const getParticles = () => {
    patricleArray = []
    let numParticle = (canvas.height * canvas.width) / 10000

    for (let i = 0; i < numParticle; i++) {
        let size = 1;
        let x = (Math.random() * ((innerWidth - size * 2) - (size * 2)) + size * 2)
        let y = (Math.random() * ((innerHeight - size * 2) - (size * 2)) + size * 2)

        let directionX = (Math.random() * 5) - 2.5
        let directionY = (Math.random() * 5) - 2.5
        let color = '#99738E';
        patricleArray.push(new Particle(x, y, directionX, directionY, size, color))
    }

}

const connectPossible = () => {
    let opacityValue = 0.25;
    for (let i = 0; i < patricleArray.length; i++) {
        for (let j = 0; j < patricleArray.length; j++) {
            let distance = ((patricleArray[i].x - patricleArray[j].x) * (patricleArray[i].x - patricleArray[j].x)) + ((patricleArray[i].y - patricleArray[j].y) * (patricleArray[i].y - patricleArray[j].y));

            if (distance < (canvas.width / 8) * (canvas.height / 8)) {
                // opacityvalue = 1- (distance/20000);
                ctx.strokeStyle = 'rgba(255,255,255,' + opacityvalue + ')';
                ctx.linewidth = 1;
                ctx.beginPath();
                ctx.moveTo(patricleArray[i].x, patricleArray[i].y);
                ctx.lineTo(patricleArray[j].x, patricleArray[j].y);
                ctx.stroke();
            }
        }
    }
}

const sunray = () => {
    let opacityValue = 1

    for (let i = 0; i < patricleArray.length; i++) {
        let dx = mouse.x - patricleArray[i].x
        let dy = mouse.y - patricleArray[i].y

        let distance = Math.sqrt(dx * dx + dy * dy)

        if (distance < mouse.radius + patricleArray[i].size) {
            let opacityvalue = 1 - (distance / 20000);
            ctx.strokeStyle = 'rgba(0,0,0,' + opacityvalue + ')';
            ctx.linewidth = 1;
            ctx.beginPath();
            ctx.moveTo(patricleArray[i].x, patricleArray[i].y);
            ctx.lineTo(mouse.x, mouse.y);
            ctx.stroke();
        }
    }
}

window.addEventListener('resize', () => {
    canvas.width = window.innerWidth
    canvas.height = window.innerHeight
    mouse.radius = (canvas.width / 80) * (canvas.height / 80);
    getParticles();
})

const animate = () => {
    requestAnimationFrame(animate)
    ctx.clearRect(0, 0, innerWidth, innerHeight)

    for (let i = 0; i < patricleArray.length; i++) {
        patricleArray[i].update();
    }
    sunray();
    connectPossible();
}

window.addEventListener('mouseout',
    function () {
        mouse.x = undefined;
        mouse.y = undefined;
    }
)

getParticles();
animate();