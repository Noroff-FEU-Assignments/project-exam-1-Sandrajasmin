const form = document.getElementById('myForm');
const name = document.getElementById('fname')
const email = document.getElementById('email')
const subject = document.getElementById('subject')
const message = document.getElementById('message')


form.addEventListener('submit', e => {
    e.preventDefault();

    validateInputs();
});

const setError = (element, message) => {
    const input = element.parentElement;
    const error = input.querySelector(".error")

    error.innerText = message;
    input.classList.add('error');
    input.classList.remove('success')
}

const setSuccess = element => {
    const input = element.parentElement;
    const error = input.querySelector(".error")

    error.innerText = '';
    input.classList.add('success');
    input.classList.remove('error');
};

const isValidEmail = email => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

const validateInputs = () => {
    const nameValue = name.value.trim();
    const emailValue = email.value.trim();
    const subjectValue = subject.value.trim();
    const messageValue = message.value.trim();

    if (nameValue === '') {
        setError(name, 'Please enter name')
    } else if (nameValue.length < 5) {
        setError(name, 'Name must be at least 5 characters')
    } else {
        setSuccess(name)
    }

    if(emailValue === '') {
        setError(email, 'Email is required');
    } else if (!isValidEmail(emailValue)) {
        setError(email, 'Provide a valid email address');
    } else {
        setSuccess(email);
    }

    if (subjectValue === '') {
        setError(subject, 'Please enter subject')
    } else if (subjectValue.length < 15) {
        setError(subject, 'Message must be at least 15 characters')
    } else {
        setSuccess(subject)
    }

    if (messageValue === '') {
        setError(message, 'Please enter your message')
    } else if (messageValue.length < 25) {
        setError(message, 'Message must be at least 25 characters')
    } else {
        setSuccess(message)
    }
}