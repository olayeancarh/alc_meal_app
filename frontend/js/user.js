// Get modal element 
let myModalNewMeal = document.querySelector('#myModalNewMeal');

// Get Buttons for adding new meal
let mewMeal = document.querySelector('.imageGrid');

// Listen for new meal click
mewMeal.addEventListener('click', (e) => {
    myModalNewMeal.style.display = 'block';
    let mealName = e.target.children["0"].children["0"].innerText;
    document.querySelector('#mealHeader').innerText = `${mealName} - Order`;
});

// get close button
let close = document.querySelector('.close');

// Listen for close modal click
close.addEventListener('click', (e) => {
    e.target.parentNode.parentNode.parentNode.style.display = 'none';
});

// When anywhere outside modal is clicked
window.onclick = function(e){
    if(e.target == myModalNewMeal){
        myModalNewMeal.style.display = 'none';
    }
};