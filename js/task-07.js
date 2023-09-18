
// document.querySelector('body').style.backgroundColor = '#eaf1fad0';
// const inputRangeRef = document.getElementById('font-size-control');
// const textRef = document.getElementById('text');

// // const fontSizeControl = ({ currentTarget }) =>
// //   (textRef.style.fontSize = `${currentTarget.value}px`);

// // inputRangeRef.addEventListener('input', fontSizeControl);

// function fontSizeControl(event) {
//   textRef.style.fontSize = event.currentTarget.value + 'px';
// }
// inputRangeRef.addEventListener('input', fontSizeControl);

// document.querySelector('body').style.backgroundColor = '#eaf1fad0';
// const inputRangeRef = document.getElementById('font-size-control');
// const textRef = document.getElementById('text');


// inputRangeRef.addEventListener("input", (event) => {
//   textRef.style.fontSize = event.currentTarget.value + 'px';
// })
// var 1

// function fontSizeControl(event) {
//     textRef.style.fontSize = event.currentTarget.value + 'px';
// }


// var 2
// const fontSizeControl = ({ currentTarget }) =>
//   (textRef.style.fontSize = `${currentTarget.value}px`);

// inputRangeRef.addEventListener('input', fontSizeControl);

const inputRangeRef = document.querySelector("#font-size-control");
const inputTextRef = document.querySelector("#text");

const handleInput = () => {
  inputTextRef.style.fontSize = `${inputRangeRef.value}px`;
};

inputRangeRef.addEventListener("input", handleInput);