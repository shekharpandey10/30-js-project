

document.addEventListener('DOMContentLoaded', () => {
    const textfield = document.querySelector('.textfield')
    const Characters = document.querySelector('.Characters')
    const Words = document.querySelector('.Words')
    const Sentences = document.querySelector('.Sentences')
    const Paragraphs = document.querySelector('.Paragraphs')
    const num = document.querySelector('.num')
    let word = 0;
    let number = 0;
    let char = 0;
    let sentence = 0;
    let para = 0;



    textfield.addEventListener('input', (e) => {
        word = 0;
        number = 0;
        char = 0;
        sentence = 0;
        para = 0;
        const str = e.target.value.trim();
        for (let i = 0; i < str.length; i++) {
            if (str[i].charCodeAt() >= 48 && str[i].charCodeAt() <= 57) {
                number++
            } else if ((str[i].charCodeAt() >= 65 && str[i].charCodeAt() >= 90) || (str[i].charCodeAt() >= 97 && str[i].charCodeAt() >= 122)) {
                char++
            }
        }
        if (str)
            word = str.split(' ').length
        sentence = str.split('.').length
        para = str.split(/\n+/).filter(p => p.trim() !== '').length
        Characters.textContent = char
        num.textContent = number
        Words.textContent = word
        Sentences.textContent = sentence - 1
        Paragraphs.textContent = para

    })
})