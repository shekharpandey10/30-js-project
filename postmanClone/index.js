const url = document.getElementById('url');
const submit = document.querySelector('.submit');

submit.addEventListener('click', () => {

    const reqType = document.querySelector(
        'input[name="requestType"]:checked'
    );

    console.log(reqType.value);

});