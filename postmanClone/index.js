const url = document.getElementById('url');
const reqType = document.querySelectorAll('input[name="requestType"]');
const contentType = document.querySelectorAll('input[name="contentType')
const submit = document.querySelector('.submit');
const inputTypeForContent = document.querySelector('.content-type')
const responseArea = document.getElementById('response-area')
let currentContentType = contentType[0].value
let currentRequestType = reqType[0].value
let numberOfParams = 1
let textarea = null;

const enterJsonRender = () => {
    const label = document.createElement('label')
    label.textContent = "Enter JSON"
    label.setAttribute('for', 'val')
    textarea = document.createElement('textarea')
    textarea.placeholder = "Enter/Paste Your JSON"
    textarea.setAttribute('rows', 5)
    textarea.setAttribute('cols', 50)
    textarea.setAttribute('id', 'val')
    inputTypeForContent.append(label, textarea)
}
const createParamsInput = () => {
    const div = document.createElement('div')
    div.classList.add('form-group', 'param-row')
    const inputOne = document.createElement('input')
    inputOne.setAttribute('placeholder', 'key of Parameter' + numberOfParams)
    inputOne.classList.add('param-key')
    const inputTwo = document.createElement('input')
    inputTwo.setAttribute('placeholder', 'Value of Parameter' + numberOfParams)
    inputTwo.classList.add('param-value')
    const button = document.createElement('button')
    button.setAttribute('type', 'button')
    button.textContent = "Add"
    button.addEventListener('click', () => {
        numberOfParams++
        const label = document.createElement('label')
        label.textContent = 'Parameter' + numberOfParams
        label.setAttribute('for', 'Parameter' + numberOfParams)
        inputTypeForContent.append(label, createParamsInput());
    })
    div.append(inputOne, inputTwo, button)

    if (numberOfParams > 1) {
        const deleteButton = document.createElement('button');
        deleteButton.textContent = "Remove";
        deleteButton.style.marginLeft = "5px";
        deleteButton.addEventListener('click', () => {
            numberOfParams--
            div.previousElementSibling.remove(); // Removes the <label>
            div.remove(); // Removes the <div class="form-group">
        });
        div.append(deleteButton);
    }
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
    if (currentContentType.toLowerCase() === 'json') {
        enterJsonRender()
    } else {
        enterParams()
    }
}
const getParamsData = () => {
    const data = {}
    const rows = document.querySelectorAll('.param-row')
    rows.forEach((row) => {
        const key = row.querySelector('.param-key').value.trim()
        const value = row.querySelector('.param-value').value.trim()
        if (key) {
            data[key] = value
        }
    })
    return data
}

const getApiCall = async (currentUrl) => {
    try {
        responseArea.value = ''
        const response = await fetch(currentUrl)
        const res = await response.json()
        console.log(res)
        responseArea.value = JSON.stringify(res, null, 2);
    } catch (error) {
        responseArea.value = JSON.stringify(error)
    }
}
const postApiCall = async (type, data, currentUrl) => {
    try {
        responseArea.value = 'Loading...';
        let payload = null;
        let finalUrl = currentUrl;
        const headers = {};

        if (type.toLowerCase() === 'json') {
            headers['Content-Type'] = 'application/json';
            payload = typeof data === 'string' ? data : JSON.stringify(data);
        } else if (type.toLowerCase() === 'custom parameters') {
            const searchQuery = new URLSearchParams(data).toString();
            if (searchQuery) {
                const separator = currentUrl.includes('?') ? '&' : '?';
                finalUrl = `${currentUrl}${separator}${searchQuery}`;
            }
        }

        const response = await fetch(finalUrl, {
            method: 'POST',
            headers: headers,
            body: payload
        });

        const res = await response.json();
        responseArea.value = JSON.stringify(res, null, 2);

    } catch (error) {
        responseArea.value = "Error: " + error.message;
    }
}


submit.addEventListener('click', () => {
    let currentUrl = url.value
    if (currentRequestType.toLowerCase() === 'get') {
        getApiCall(currentUrl)
    } else if (currentRequestType.toLowerCase() === 'post') {
        let data
        if (currentContentType.toLowerCase() === 'json') {
            data = textarea?.value?.trim()
        } else {
            data = getParamsData();
        }
        postApiCall(currentContentType, data, currentUrl)
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