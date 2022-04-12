//log into existing account
const login = async (event) => {

    event.preventDefault();
  
    const username = document.querySelector('#username-login').value.trim();
    const password = document.querySelector('#password-login').value.trim();
    const errorMessage = document.querySelector('.error');
  
    if (username && password) {
      const response = await fetch('/api/users/login', {
        method: 'POST',
        body: JSON.stringify({ username, password }),
        headers: { 'Content-Type': 'application/json' }
      });
      
      if (response.ok) {
        document.location.replace('/');
      } else {
        errorMessage.style.display = "block";
      }
    }
  };
  
  document.querySelector('.login-form').addEventListener('submit', login);
  
  //sign up new user
  const signup = async (event) => {
      event.preventDefault();
  
      const username = document.querySelector('#username-signup').value.trim();
      const email = document.querySelector('#email-signup').value.trim();
      const password = document.querySelector('#password-signup').value.trim();
  
      if (username && email && password) {
          const response = await fetch('/api/users/signup', {
            method: 'POST',
            body: JSON.stringify({ username, email, password }),
            headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        document.location.replace('/');
      } else {
        alert('error');
      }
      }
  
  };
  
  document.querySelector('.signup-form').addEventListener('submit', signup);