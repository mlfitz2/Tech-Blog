const loginFormHandler = async (event) => {
    event.preventDefault();

    const name = document.querySelector('#username-input-login').value.trim();
    const password = document.querySelector('#password-input-login').value.trim();

    if (name && password) {
        const response = await fetch('/api/users/login', {
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
.querySelector('#login-form')
.addEventListener('submit', loginFormHandler);