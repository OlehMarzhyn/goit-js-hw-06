const inputRef = document.querySelector('#name-input');
const nameRef = document.querySelector('#name-output');

const getInputValue = ({ target }) =>
  (nameRef.innerText = target.value ? target.value : 'Anonymous');

inputRef.addEventListener('input', getInputValue);



