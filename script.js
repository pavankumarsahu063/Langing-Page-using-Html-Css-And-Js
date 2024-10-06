const form=document.getElementById("form");

form.addEventListener('submit',function(event){
    event.preventDefault();

    let  isValid=true;

    const firstName=document.getElementById("firstname").value.trim();

    const lastName = document.getElementById('lastname').value.trim();
    const email = document.getElementById('email').value.trim();
    const phoneNumber = document.getElementById('phonenumber').value.trim();
    const password = document.getElementById('password').value.trim();

    if (firstName === '') {
        alert('First name is required.');
        isValid = false;
    }

    if (lastName === '') {
        alert('Last name is required.');
        isValid = false;
    }

    if (lastName === '') {
        alert('Last name is required.');
        isValid = false;
    }

    if (phoneNumber !== '' && !validatePhoneNumber(phoneNumber)) {
        alert('Please enter a valid phone number (10 digits).');
        isValid = false;
    }

    if (password.length < 8) {
        alert('Password must be at least 8 characters long.');
        isValid = false;
    }

    if (isValid) {
        const formData = {
            first_name: firstName,
            last_name: lastName,
            email: email,
            phone_number: phoneNumber,
            password: password
        };
        console.log(formData);
    }
   

});

function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
}

function validatePhoneNumber(phoneNumber) {
    const phonePattern = /^[0-9]{10}$/;
    return phonePattern.test(phoneNumber);
}