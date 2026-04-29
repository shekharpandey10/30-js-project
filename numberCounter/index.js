document.addEventListener('DOMContentLoaded', () => {

    const number = document.querySelector('.number')
    const increase = document.querySelector('.increase')
    const decrease = document.querySelector('.decrease')
    const resetBtn = document.querySelector('.reset-btn')
    const savedNumber = document.querySelector('.saved-number')
    const saveBtn = document.querySelector('.save-btn')
    const clearBtn = document.querySelector('.clear-btn')

    let value = 0

    let savedNumArr = []
    const emptyListDom = () => {
        if (!savedNumArr.length) {
            savedNumber.textContent = "No saved number yet"
        }
    }
    emptyListDom()
    resetBtn.addEventListener('click', () => {
        value = 0
        number.textContent = value
    })
    increase.addEventListener('click', () => {
        value++
        number.textContent = value
    })
    decrease.addEventListener('click', () => {
        value--
        number.textContent = value

    })
    saveBtn.addEventListener('click', () => {
        if (!savedNumArr.length) {
            savedNumber.textContent = "No saved number yet"
        }
        savedNumArr.push(value)
        savedNumber.innerHTML = ''
        console.log(savedNumArr)
        const numListEle = savedNumArr.map((num, i) => {
            const span = document.createElement('span')
            span.innerText = num
            span.id = i
            return span
        })
        console.log(numListEle)

        numListEle.forEach(ele => savedNumber.append(ele))
    })

    clearBtn.addEventListener('click', () => {
        savedNumArr = []
        savedNumber.innerHTML = ''
        emptyListDom()
    })

})