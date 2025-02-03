const orderBtn = document.querySelector('#btn');

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
    const order = prompt('Hello there!, What`s your poison');
    menu.forEach((item) => {
        if(!item.name === order) {
            alert(`Sorry bud, We dont surve ${order} `);
        }else{
            alert(`One ${order} coming right up!`)
        }
    })
};

orderBtn.addEventListener('click', orderDrink);
