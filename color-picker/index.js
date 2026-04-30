

document.addEventListener('DOMContentLoaded', () => {
    const hex = document.querySelector('.hex')
    const rgb = document.querySelector('.rgb')
    const hsl = document.querySelector('.hsl')
    const color = document.querySelector('.color')


    function hexToHSL(hex) {
        let r = parseInt(hex.substring(1, 3), 16) / 255;
        let g = parseInt(hex.substring(3, 5), 16) / 255;
        let b = parseInt(hex.substring(5, 7), 16) / 255;

        let min = Math.min(r, g, b), max = Math.max(r, g, b);
        let h, s, l = (max + min) / 2;

        if (max === min) {
            h = s = 0;
        } else {
            let d = max - min;
            s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
            switch (max) {
                case r: h = (g - b) / d + (g < b ? 6 : 0); break;
                case g: h = (b - r) / d + 2; break;
                case b: h = (r - g) / d + 4; break;
            }
            h /= 6;
        }

        return {
            h: Math.round(h * 360),
            s: Math.round(s * 100),
            l: Math.round(l * 100)
        };
    }
    const loadColor = (hexColor) => {
        const r = parseInt(hexColor.substring(1, 3), 16);
        const g = parseInt(hexColor.substring(3, 5), 16);
        const b = parseInt(hexColor.substring(5, 7), 16);
        const { h, s, l } = hexToHSL(hexColor)

        rgb.textContent = `rgb(${r},${g},${b})`
        hsl.textContent = `hsl(${h},${s},${l})`
        hex.textContent = `${hexColor}`
    }

    loadColor(color.value)

    color.addEventListener('input', (e) => {
        const hexColor = e.target.value
        loadColor(hexColor)
    })
    hex.addEventListener('click', (e) => {
        navigator.clipboard.writeText(e.target.textContent)
    })
    rgb.addEventListener('click', (e) => {
        navigator.clipboard.writeText(e.target.textContent)
    })
    hsl.addEventListener('click', (e) => {
        navigator.clipboard.writeText(e.target.textContent)
    })

})