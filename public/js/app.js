//Hide hint
document.querySelector('.hint').style.display = 'none';

//Create button element
const newButton = document.createElement('button');
newButton.innerHTML = 'Show Hint';

//Add button after header
document.querySelector('h2').insertAdjacentElement('afterend', newButton);

document.querySelector('#content button').addEventListener('click', () => {
    const h1 = document.querySelector('h1');
    const button = document.querySelector('#content button');
    if (h1.innerHTML === 'question') {

        if (button.innerHTML === 'Show Hint') {
            document.querySelector('.hint').style.display = '';
            button.innerHTML ='Hide Hint';
        } else {
            document.querySelector('.hint').style.display = 'none';
            button.innerHTML ='Show Hint';
        }
        
    }
})