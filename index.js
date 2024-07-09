document.addEventListener('DOMContentLoaded', function() {
    const myMessage = document.querySelector('.myMessage');
    const theMessageButton = document.querySelector('.theMessageButton');
    const clearMessageButton = document.querySelector('.clearMessageButton');
    const inputBox = document.querySelector('.theInputValue');
    const submitValueButton = document.querySelector('.submitValueButton');
    const fruitList = document.querySelector('.fruits');
    const newFruitInput = document.querySelector('.newFruitInput');
    const addFruitButton = document.querySelector('.addFruitButton');
    const fruits = ['Apples', 'Pears', 'Oranges', 'Grapes', 'Bananas'];
    
    // how the fruits are displayed at first
    fruits.forEach(fruit => {
        const li = document.createElement('li');
        li.innerText = fruit;
        fruitList.appendChild(li);
    });

    setTimeout(function() {
        myMessage.innerText = 'This is a message in the DOM!';
    }, 3000);

    // button is clicked so the message can show
    theMessageButton.addEventListener('click', function() {
        if (inputBox.value.trim().length > 0) {
            myMessage.innerText = inputBox.value;
        }
    });

    clearMessageButton.addEventListener('click', function() {
        myMessage.innerText = '';
    });

    // new fruit to the list can be added
    addFruitButton.addEventListener('click', function() {
        const newFruit = newFruitInput.value.trim();
        if (newFruit.length > 0) {
            const li = document.createElement('li');
            li.innerText = newFruit;
            fruitList.appendChild(li);
            newFruitInput.value = '';
        }
    });

    myMessage.addEventListener('click', function() {
        myMessage.classList.toggle('darkmode');
    });
});
