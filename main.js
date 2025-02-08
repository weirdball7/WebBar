const orderBtn = document.querySelector('#btn');

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

const orderDrink = (menu) => {
    const order = prompt("What's your poison");
    for (let i = 0; i < menu.length; i++) {
        if (menu[i].name.toLowerCase() === order.toLowerCase()) {
            alert(`one ${order} coming right up!`);
            customer.money = customer.money - menu[i].price;
            console.log(customer.money)
            return;
        }
    }
    alert(`Sorry buddy we don't serve ${order}`);
};

orderBtn.addEventListener('click', () => orderDrink(menu));


