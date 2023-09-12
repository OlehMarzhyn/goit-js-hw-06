document.querySelector('body').style.backgroundColor = '#EBECF0';
const inputRef = document.getElementById('validation-input');
inputRef.addEventListener('blur', onBlurBorderColor);
// var1
// function onBlurBorderColor(event) {
//   let inputValue = event.currentTarget.value;
//   if (inputValue.length === Number(inputRef.dataset.length)) {
//     inputRef.classList.add('valid');
//     inputRef.classList.remove('invalid');
//   }
//   if (inputRef.value.length === 0) {
//     inputRef.classList.remove('valid');
//     inputRef.classList.remove('invalid');
//   }
//   if (
//     inputRef.value.length !== Number(inputRef.dataset.length) &&
//     inputRef.value.length !== 0
//   ) {
//     inputRef.classList.add('invalid');
//   }
// }

function onBlurBorderColor(event) {
    const inputValue = inputRef.getAttribute('data-length');
    
    if (inputRef.value.length === Number(inputValue)) {
        inputRef.classList.add('valid');
        inputRef.classList.remove('invalid');
    }
    if (inputRef.value.length === 0) {
        inputRef.classList.remove('valid');
        inputRef.classList.remove('invalid');
    }
    if (inputRef.value.length !== Number(inputValue) && inputRef.value.length !== 0) {
        inputRef.classList.add('invalid');
    }
}
  












// document.querySelector('body').style.backgroundColor = '#EBECF0';
// const inputRef = document.getElementById('validation-input');
// inputRef.addEventListener('blur', onBlurBorderColor);

//     function onBlurBorderColor(event) {
//         const inputValue = inputRef.getAttribute('data-length');
        
//         if (inputRef.value.length === Number(inputValue)) {
//             inputRef.classList.add('valid');
//             inputRef.classList.remove('invalid');
//         }
//         if (inputRef.value.length === 0) {
//             inputRef.classList.remove('valid');
//             inputRef.classList.remove('invalid');
//         }
//         if (inputRef.value.length !== Number(inputValue) && inputRef.value.length !== 0) {
//             inputRef.classList.add('invalid');
//         }
//     }