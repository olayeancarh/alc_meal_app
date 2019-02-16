// Get modal element 
let myModalSignIn = document.querySelector('#myModalSignIn');

let myModalSignUp = document.querySelector('#myModalSignUp');

let myModalCaterer = document.querySelector('#myModalCaterer');

// Get Buttons for sign in
let signInBtn = document.querySelector('#signIn');

// Get Buttons for sign up - user
let signUpUserBtn = document.querySelector('#signUpUser');

// Get Buttons for sign up - caterer
let signUpCatererBtn = document.querySelector('#signUpCaterer');

// get close button
let close = document.querySelector('.close'); 
let close1 = document.querySelector('.close1');
let close2 = document.querySelector('.close2');

// Listen for sign-in click
signInBtn.addEventListener('click', openSignInModal);

// Listen for sign-up usre click
signUpUserBtn.addEventListener('click', openSignUpUserModal);

// Listen for sign-up caterer click
signUpCatererBtn.addEventListener('click', openSignUpCatererModal);

// Listen for close modal click
close.addEventListener('click', closeModal);

// Listen for close modal click
close1.addEventListener('click', closeModal);

// Listen for close modal click
close2.addEventListener('click', closeModal);

// Funtion to open sign in modal
function openSignInModal(){
    myModalSignIn.style.display = 'block';
}

// Funtion to open sign in modal
function openSignUpUserModal(){
    myModalSignUp.style.display = 'block';
}

// Funtion to open sign in modal
function openSignUpCatererModal(){
    myModalCaterer.style.display = 'block';
}

// Funtion to open sign in modal
function closeModal(e){
    // console.log(e.target.parentNode.parentNode.parentNode);
    e.target.parentNode.parentNode.parentNode.style.display = 'none';
}

// When anywhere outside modal is clicked
window.onclick = function(e){
    if(e.target == myModalCaterer || e.target == myModalSignUp || e.target == myModalSignIn){
        myModalCaterer.style.display = 'none';
        myModalSignUp.style.display = 'none';
        myModalSignIn.style.display = 'none';
    }
};