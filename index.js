document.addEventListener('DOMContentLoaded', () => {
    const myMessage = document.querySelector('.myMessage');
    const theMessageButton = document.querySelector('.theMessageButton');
    const clearMessageButton = document.querySelector('.clearMessageButton');
    const inputBox = document.querySelector('.theInputValue');
    const fruitList = document.querySelector('.fruits');
    const fruits = ['Apples', 'Pears', 'Oranges', 'Grapes', 'Bananas'];

    
    setTimeout(() => {
        myMessage.innerText = 'This is a message in the DOM!';
    }, 3000);

    
    theMessageButton.addEventListener('click', () => {
        if (inputBox.value.trim().length > 0) {
            myMessage.innerText = inputBox.value;
        } else {
            myMessage.innerText = 'Button pressed';
        }
    });

    
    clearMessageButton.addEventListener('click', () => {
        myMessage.innerText = '';
    });

    
    myMessage.addEventListener('click', () => {
        myMessage.classList.toggle('darkmode');
    });

    
    fruits.forEach(fruit => {
        const li = document.createElement('li');
        li.innerText = fruit;
        fruitList.appendChild(li);
    });
});
