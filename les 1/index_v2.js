"use strict";

window.onload = console.log("page is fully loaded");
let dishes = [];

const orderForm = {
    initfields() {
        let form = document.getElementById('form');
        dishes.push({
            id: '1',
            name: ' Burger and french fries',
            price: '18'
        });

        dishes.push({
            id: '2',
            name: ' Spaghetti Bolognese',
            price: '15'
        });


        dishes.push({
            id: '3',
            name: ' Lasagna',
            price: '16'
        });

        dishes.push({
            id: '4',
            name: ' Mac and Cheese',
            price: '14'
        });

        dishes.push({
            id: '5',
            name: ' Chicken Milanese',
            price: '17'
        });

        dishes.forEach((dish) => {
            let orderOptions = document.getElementById('order');
            let htmlString = ` <input type="checkbox" id="${dish.id}" value="${dish.name}" name="order">
            <label for="orderInput">${dish.name}</label>`

            orderOptions.insertAdjacentHTML("afterbegin", htmlString);
        });

        let button = document.getElementById('submit');
        form.addEventListener('submit', this.getInfo);

        let button2 = document.getElementById('order');
        form.addEventListener('submit', this.calculatePrice);
    },
    getInfo(e) {
        e.preventDefault();
        let name = document.getElementById('name').value;
        let email = document.getElementById('email').value;
        let orders = [];
        let orderCheck = document.querySelectorAll('input[name="order"]:checked');

        orderCheck.forEach((checkbox) => {
            orders.push(checkbox.value);
        });


        console.log(orders);

        let fullOrder = {
            name,
            orders,
            email
        }

        orderForm.printOrder(fullOrder);

    },
    printOrder(orderdetails) {
        console.log(orderdetails);
        let {
            name,
            orders,
            email
        } = orderdetails;

        let invoertekst = document.getElementById("invoertekst");
        invoertekst.innerHTML = `The order for the customer ${name}  is the following: ${orders} . The customer may be notified by email: ${email} `
    },
    calculatePrice(e) {
        e.preventDefault();
        console.log("yes");
    }
}

orderForm.initfields();