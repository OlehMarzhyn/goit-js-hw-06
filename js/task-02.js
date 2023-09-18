const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const ulEl = document.querySelector('#ingredients');

const list = ingredients.map((ingredient) => {
  const item = document.createElement('li');
  item.textContent = ingredient;
  item.classList.add('item');
  return item;
});


ulEl.append(...list);
