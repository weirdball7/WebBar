const orderBtn = document.querySelector('#btn');
const menuBtn = document.querySelector('#menu-btn');
const bar = document.querySelector('.bar');

const customer = {
    'money': 1000
}

const menu = [
    {
    name: 'Vodka', 
    price: 100,
    quantity: 10
    },
    {
    name: 'Whiskey',
    price: 150,
    quantity: 10
    },
    {
    name: 'Rum',
    price: 120,
    quantity: 10
    },
    {
    name: 'Beer',
    price: 50,
    quantity: 10
    },
];

const showMenu = (menu) => {
    const menuContainer = document.createElement('div');
    menuContainer.classList.add('menu')
    const itemList = document.createElement('ul');
    for (let i=0; i<menu.length; i++){
        const menuItem = document.createElement('li');
        menuItem.innerText = `${menu[i].name} - ${menu[i].price} Shmekels`;
        itemList.appendChild(menuItem);
    }
    menuContainer.appendChild(itemList);
    bar.appendChild(menuContainer);
    menuBtn.disabled = true;
};

const decreasValues = (menu, customer, i) => {
    customer.money = customer.money - menu[i].price;
    menu[i].quantity--
    console.log(`You have: ${customer.money} Shmekels left`);
    console.log(menu[i].quantity);
};

const orderDrink = (menu) => {
    const order = prompt("What's your poison?");
    for (let i = 0; i < menu.length; i++) {
        if (menu[i].name.toLowerCase() === order.toLowerCase()) {
            alert(`one ${order} coming right up!`);
            decreasValues(menu, customer, i);
            return;
        }
    }
    alert(`Sorry buddy we don't serve ${order}`);
};


orderBtn.addEventListener('click', () => orderDrink(menu));
menuBtn.addEventListener('click', () => showMenu(menu));


