const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];


// const galleryMarkup = document.querySelector('#gallery')


//   ulEl.insertAdjacentHTML('afterbegin', galleryMarkup);


const menu = document.querySelector('ul.gallery');
menu.classList.add('gallery__link');
const markUp = createImages(images);
menu.insertAdjacentHTML('afterbegin', markUp);
function createImages(images) {
  return images.reduce((acc, image) => (acc += createMarkup(image)), ' ');
}
function createMarkup({ url, alt }) {
  const itemList = `<li><img src='${(url)}' alt='${alt}'width = "150" height = "100"/></li>`;
  return itemList;
}