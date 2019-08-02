function login(){
    const loginBtn = document.getElementById('login-btn');
    const loginForm = document.querySelector('.login-form');
    const regOption = document.querySelector('.registration-option');
    loginBtn.addEventListener('click', () => {
        regOption.classList.remove('active');
        regOption.classList.add('inactive');
        loginForm.classList.remove('inactive');
        loginForm.classList.add('active');
    });
}

login();