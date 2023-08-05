const grilled = [
  {
    id: 1,
    name: 'Pork Barbeque',
    price: 25,
    image: '/assets/images/menu/grilled/pork_bbq.jpg',
    description: '',
  },
  {
    id: 2,
    name: 'Hotdog',
    price: 22,
    image: '/assets/images/menu/grilled/hotdog.jpg',
    description: '',
  },
  {
    id: 3,
    name: 'Isaw Manok',
    price: 12,
    image: '/assets/images/menu/grilled/isaw-manok.jpg',
    description: '',
  },
  {
    id: 4,
    name: 'Isaw Baboy',
    price: 15,
    image: '/assets/images/menu/grilled/isaw-baboy.jpg',
    description: '',
  },
  {
    id: 5,
    name: 'Isaw Baboy (bilog)',
    price: 20,
    image: '/assets/images/menu/grilled/isaw-bilog.jpg',
    description: '',
  },
  {
    id: 6,
    name: 'Leeg',
    price: 35,
    image: '/assets/images/menu/grilled/leeg.jpg',
    description: '',
  },
  {
    id: 7,
    name: 'Paa (Adidas)',
    price: 18,
    image: '/assets/images/menu/grilled/adidas.jpg',
    description: '',
  },
  {
    id: 8,
    name: 'Dugo (Betamax)',
    price: 12,
    image: '/assets/images/menu/grilled/betamax.jpg',
    description: '',
  },
  {
    id: 9,
    name: 'Chicharong Bulaklak',
    price: 19,
    image: '/assets/images/menu/grilled/chicharong-bulaklak.jpg',
    description: '',
  },
  {
    id: 10,
    name: 'Tenga',
    price: 23,
    image: '/assets/images/menu/grilled/tenga.jpg',
    description: '',
  },
];

const fried = [
  {
    id: 11,
    name: 'French Fries',
    price: 25,
    image: '/assets/images/menu/fried/french-fries.jpeg',
    description: '',
  },
  {
    id: 12,
    name: 'Fishball',
    price: 25,
    image: '/assets/images/menu/fried/fishball.jpeg',
    description: '',
  },
  {
    id: 13,
    name: 'Squidball',
    price: 25,
    image: '/assets/images/menu/fried/squidball.jpeg',
    description: '',
  },
  {
    id: 14,
    name: 'Kikiam',
    price: 25,
    image: '/assets/images/menu/fried/kikiam.jpeg',
    description: '',
  },
  {
    id: 15,
    name: 'Siomai',
    price: 20,
    image: '/assets/images/menu/fried/siomai.jpeg',
    description: '',
  },
  {
    id: 16,
    name: 'Dumplings',
    price: 25,
    image: '/assets/images/menu/fried/dumplings.jpeg',
    description: '',
  },
  {
    id: 17,
    name: 'Cheese Sticks',
    price: 18,
    image: '/assets/images/menu/fried/cheese-sticks.jpg',
    description: '',
  },
];

const drinks = [
  {
    id: 18,
    name: 'Softdrinks (mismo)',
    price: 15,
    image: '/assets/images/menu/drinks/mismo.jpeg',
    description: '',
  },
  {
    id: 19,
    name: 'Gulaman',
    price: 18,
    image: '/assets/images/menu/drinks/gulaman.jpeg',
    description: '',
  },
  {
    id: 20,
    name: 'C2',
    price: 18,
    image: '/assets/images/menu/drinks/c2.jpeg',
    description: '',
  },
  {
    id: 21,
    name: 'Pale Pilsen',
    price: 60,
    image: '/assets/images/menu/drinks/pale-pilsen.jpeg',
    description: '',
  },
  {
    id: 22,
    name: 'San Mig Light',
    price: 65,
    image: '/assets/images/menu/drinks/sanmig-light.jpeg',
    description: '',
  },
  {
    id: 23,
    name: '1.5L Softdrinks',
    price: 80,
    image: '/assets/images/menu/drinks/coke1.5.jpeg',
    description: '',
  },
];

function createMenuItem(item) {
  console.log(item);
  const parentEl = document.createElement('div');
  parentEl.classList.add('menu-item');

  const itemImage = document.createElement('img');
  itemImage.classList.add('menu-item__image');
  itemImage.src = item.image;

  parentEl.appendChild(itemImage);

  const itemText = document.createElement('div');
  itemText.classList.add('menu-item__text');

  const itemTitle = document.createElement('span');
  itemTitle.classList.add('menu-item__text--name');
  itemTitle.innerText = item.name;

  const itemPrice = document.createElement('span');
  itemPrice.classList.add('menu-item__text--price');
  itemPrice.innerHTML = `&#8369 ${item.price}`;

  itemText.appendChild(itemTitle);
  itemText.appendChild(itemPrice);

  parentEl.appendChild(itemText);

  return parentEl;
}

const grilledContainer = document.getElementById('grilled');
const grilledItems = grilled.map((item) => createMenuItem(item));
grilledContainer.innerHTML = '';
grilledItems.forEach((item) => grilledContainer.appendChild(item));

const friedContainer = document.getElementById('fried');
const friedItems = fried.map((item) => createMenuItem(item));
friedContainer.innerHTML = '';
friedItems.forEach((item) => friedContainer.appendChild(item));

const drinksContainer = document.getElementById('drinks');
const drinksItems = drinks.map((item) => createMenuItem(item));
drinksContainer.innerHTML = '';
drinksItems.forEach((item) => drinksContainer.appendChild(item));
