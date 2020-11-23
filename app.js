let addToDoButton = document.getElementById('addToDo');
let addToDoContainer = document.getElementById('toDoContainer');
let inputField = document.getElementById('inputField');

// first we stored now we are making a functional with DOM
addToDoButton.addEventListener('click', function() {
    let paragraph = document.createElement('p');
    // #7 means everytime when we click new paragraph will be created;
    // then we need to append it to toDoContainer:
    addToDoContainer.appendChild(paragraph);
    paragraph.innerText = inputField.value;
    // here we are adding paragraph-style;
    paragraph.classList.add('paragraph-styling');
    inputField.value = '';
    paragraph.addEventListener('click', function() {
        paragraph.style.textDecoration = 'line-through'

    });

})