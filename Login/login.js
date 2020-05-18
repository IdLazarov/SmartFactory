const username = document.getElementById('username');
const pasword = document.getElementById('password');
const form = document.getElementById('login-form');
const errorElement = document.getElementById('error');


form.addEventListener('submit', (e) =>{
    let messages = [];

    if(pasword.value.length <= 6){
        messages.push('Password must be longer than 6 characters');
    }

    if(pasword.value === 'password'){
        messages.push('Password can not be password');
    }
    
    
    window.location = "../HomePage/home.html";
    if(messages.length > 0){
        e.preventDefault();
        errorElement.innerText = messages.join(", ");
    }

    
});