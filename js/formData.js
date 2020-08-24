const form = document.querySelector('#contact-form');

const submitFormData = (e) => {
    e.preventDefault();
    const name = document.querySelector('#name').value
    const email = document.querySelector('#email').value
    const phone = document.querySelector('#phone').value
    const content = document.querySelector('#message').value

    const messageObj = ({ user_id: 1, name, email, phone, content })

    fetch('https://mdprofessionalcleaning-api.herokuapp.com/api/v1/messages', {
        method: 'POST',
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
        },
        body: JSON.stringify(messageObj)
    })
    .then((res) => res.json())
    .then((data) => console.log(data))
    form.reset()
}

form.addEventListener('submit', submitFormData);