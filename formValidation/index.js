

document.addEventListener('DOMContentLoaded', () => {
    const fullname = document.querySelector('#fullname')
    const email = document.querySelector('#email')
    const password = document.querySelector('#password')
    const confirmPassword = document.querySelector('#confirmPassword')

    const name = document.querySelector('.name')
    const emailTag = document.querySelector('.email')
    const passTag = document.querySelector('.pass')
    const confirmPass = document.querySelector('.conform-pass')
    const SignUp = document.querySelector('#SignUp')

    let nameError = ''
    let emailError = ''
    let passwordError = ''
    let conformPassError = ''
    const checkFullNameValidation = (name) => {
        if (!name.trim()) {
            nameError = "Name can't be blank."
        } else if (name.length < 3) {
            nameError = "Min 3 char required"
        } else {
            nameError = ''
        }
    }

    const validEmail = (email) => {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email)
    }
    const checkEmailValidation = (emailVal) => {
        if (!emailVal.trim()) {
            emailError = "Email can't be blank."
        } else if (!validEmail(emailVal)) {
            emailError = 'Email is not valid.'
        } else {
            emailError = ''
        }
    }
    const validPass = (pass) => {
        const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/
        return regex.test(pass)
    }
    const checkPasswordValidation = (pass) => {
        if (!validPass(pass)) {
            passwordError = "Password must has at least 8 characters that include at least 1 lowercase character, 1 uppercase characters, 1 number, and 1 special character in (!@#$%^&*)"
        } else {
            passwordError = ''
        }
    }

    const checkConformPassValidtion = (pass, conformPassVal) => {

        if (!validPass(pass) || !validPass(conformPassVal)) {

            conformPassError =
                'Password must have at least 8 characters including 1 lowercase letter, 1 uppercase letter, 1 number, and 1 special character.'

        } else if (pass !== conformPassVal) {

            conformPassError = 'Password confirmation does not match'

        } else {

            conformPassError = ''

        }
    }

    fullname.addEventListener('input', () => {
        const fullNameValue = fullname.value
        checkFullNameValidation(fullNameValue)
        if (nameError.trim()) {
            name.textContent = nameError;

        } else {
            name.textContent = ''
        }
    })

    email.addEventListener('input', () => {
        const emailValue = email.value;
        checkEmailValidation(emailValue)
        if (emailError.trim()) {
            emailTag.textContent = emailError
        } else {
            emailTag.textContent = ''
        }
    })

    password.addEventListener('input', () => {
        const passwordValue = password.value;
        checkPasswordValidation(passwordValue)
        if (passwordError.trim()) {
            passTag.textContent = passwordError
        } else {
            passTag.textContent = ''
        }
    })
    confirmPassword.addEventListener('input', () => {
        const passwordValue = password.value;
        const conformPassValue = confirmPassword.value
        checkConformPassValidtion(passwordValue, conformPassValue)
        if (conformPassError.trim()) {
            confirmPass.textContent = conformPassError
        } else {
            confirmPass.textContent = ''
        }
    })
    SignUp.addEventListener('click', () => {
        const isError = nameError || emailError || passwordError || conformPassError

        const allFieldsFilled = fullname.value && email.value && password.value && confirmPassword.value
        if (!isError && allFieldsFilled) {
            alert('Sign up succesfully')
        }
    })
})