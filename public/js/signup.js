const signupFormHandler = async (event) => {
    event.prevendDefault();

    const name = document.querySelector('#username-input-signup').value.trim();
    const password = document.querySelector('#password-input-signup').value.trim();

    if (name && password) {
        const response = await fetch('/api/user', {
            method: 'POST',
            body: JSON.stringify({ 
                name, password
             }),
             headers: { 'Content-Type': 'application/json' },
        });

        if (response.ok) {
            document.location.replace('/dashboard');
        } else {
            alert(response.statusText);
        }
    }
};

document
.querySelector('#signup-form')
.addEventListener('submit', signupFormHandler);

