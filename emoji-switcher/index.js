
document.addEventListener('DOMContentLoaded', () => {
    const Emoji = document.querySelector('.Emoji')
    let emojiList = []
    let index = 0

    const getEmojis = async () => {
        const resp = await fetch('https://emoji-api.com/emojis?access_key=1ce9b701f975ba7b63dd065ab1e09f26e3d1e83d')
        const data = await resp.json()
        console.log(data)
        emojiList = data
    }
    getEmojis()

    Emoji.addEventListener('mouseenter', () => {
        Emoji.textContent = emojiList[index++]?.character
    })
})