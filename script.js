const progress = document.getElementById('progress');
const prev = document.getElementById('prev');
const next = document.getElementById('next');
// Ifthey are more than one we use query selector
const circles = document.querySelectorAll('.circle');

// index for the active circle
let currentActive = 1;

// event taht executes everytime a user clicks on the next button
next.addEventListener('click', () => {
    // if user clicks the next button increment the index -currentActive
    currentActive++;

    // make sure that the index does'nt go over the length of the circles.
    if(currentActive > circles.length) {
        currentActive = circles.length; 
    }
    // function call
    update();
});


// event taht executes everytime a user clicks on the previous button
prev.addEventListener('click', () => {
    // if user clicks the previous button, decrement the index -currentActive
    currentActive--;

    // if the index is below it's starting point which is 1, reassign to it's initial value.
    if(currentActive < 1) {
        currentActive = 1; 
    }
    // function call.
    update();
});


function update() {

    // the circles class has it's value in an array and we iterate through them using a forEach.
    circles.forEach((circle, idx) => {

        // if index of circle is less than the current active value, then set the class value to active.
      
        if(idx < currentActive) {
            circle.classList.add('active');
        }else {
            circle.classList.remove('active');
        }
    });

    const actives = document.querySelectorAll('.active');
    progress.style.width = ((actives.length -1)  / (circles.length -1)) * 100 + '%';

    if(currentActive === 1) {
        prev.disabled = true;
    }
    else if(currentActive === circles.length) {
        next.disabled = true;
    }
    else {
        prev.disabled = false;
        next.disabled = false;
    }
}