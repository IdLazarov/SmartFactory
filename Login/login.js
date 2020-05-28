const username = document.getElementById('username');
const pasword = document.getElementById('password');
const form = document.getElementById('login-form');
const errorElement = document.getElementById('error');
const loginButton = document.querySelector('submit-login-button');


// firebase.auth().onAuthStateChanged(function (user) {
//     if (user) {
//         //user signed in
//     }
//     else {
//         //not signed in
//     }
// });




// function login() {

//     let passwordValue = pasword.value();
//     let usernameValue = username.value();

//     redirectHome();
//     firebase.auth().sighInWithEmailAndPassword(usernameValue, passwordValue).catch(function(error){
//         let errorCode = error.code;
//         let errorMessage = error.message;

//         window.alert("Error: "+ errorMessage);
//     });
    
// }


loginButton.addEventListener("click", () => {
    window.location.href = "../../HomePage/home.html"
    window.location.href = "http://127.0.0.1:5500/HomePage/home.html"
});

















// form.addEventListener('submit', (e) =>{
//     let messages = [];

//     if(pasword.value.length <= 6){
//         messages.push('Password must be longer than 6 characters');
//     }

//     if(pasword.value === 'password'){
//         messages.push('Password can not be password');
//     }


//     window.location = "../HomePage/home.html";
//     if(messages.length > 0){
//         e.preventDefault();
//         errorElement.innerText = messages.join(", ");
//     }


// });




