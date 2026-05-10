const url = document.getElementById('url');
const reqType = document.querySelectorAll('input[name="requestType"]');
const contentType = document.querySelectorAll('input[name="contentType')
const submit = document.querySelector('.submit');
const inputTypeForContent = document.querySelector('.content-type')
const responseArea = document.getElementById('response-area')
let currentContentType = contentType[0].value
let currentRequestType = reqType[0].value
let numberOfParams = 1

const enterJsonRender = () => {
    const label = document.createElement('label')
    label.textContent = "Enter JSON"
    label.setAttribute('for', 'val')
    const textarea = document.createElement('textarea')
    textarea.placeholder = "Enter/Paste Your JSON"
    textarea.setAttribute('rows', 5)
    textarea.setAttribute('cols', 50)
    textarea.setAttribute('id', 'val')
    inputTypeForContent.append(label, textarea)
}
const createParamsInput = () => {
    const div = document.createElement('div')
    div.classList.add('form-group')
    const inputOne = document.createElement('input')
    inputOne.setAttribute('placeholder', 'key of Parameter' + numberOfParams)
    const inputTwo = document.createElement('input')
    inputTwo.setAttribute('placeholder', 'Value of Parameter' + numberOfParams)
    const button = document.createElement('button')
    button.setAttribute('type', 'button')
    button.textContent = "Add"
    button.addEventListener('click', () => {
        numberOfParams++
        // createParamsInput()
    })
    div.append(inputOne, inputTwo, button)
    return div
}

const enterParams = () => {
    const label = document.createElement('label')
    label.setAttribute('for', 'Parameter' + numberOfParams)
    label.textContent = 'Parameter ' + numberOfParams

    const div = createParamsInput()
    inputTypeForContent.append(label, div)

}
const renderParmas = (currentContentType) => {
    inputTypeForContent.innerHTML = ''
    if (currentContentType === 'JSON') {
        enterJsonRender()
    } else {
        enterParams()
    }
}

const getApiCall = async (currentUrl) => {
    try {
        const response = await fetch(currentUrl)
        const res = await response.json()
        console.log(res)
        responseArea.value = JSON.stringify(res, null, 2);
    } catch (error) {

    }
}


submit.addEventListener('click', () => {
    console.log(currentContentType);
    console.log(currentRequestType);
    let currentUrl = url.value
    if (currentRequestType.toLowerCase() === 'get') {
        getApiCall(currentUrl)
    } else if (currentContentType.toLowerCase() === 'post') {

    }

});

reqType.forEach((req) => {
    req.addEventListener('change', function () {
        currentRequestType = this.value

    })
})


contentType.forEach((oneType) => {
    oneType.addEventListener('change', function () {
        currentContentType = this.value
        renderParmas(currentContentType)
    })
})

enterJsonRender()