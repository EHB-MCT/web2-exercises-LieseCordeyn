"use strict";

window.onload = console.log("page is fully loaded");

const orderForm = {
    initfields() {
        let button = document.getElementById('submit')
        form.addEventListener('submit', this.getInfo);
    },
    getInfo(e) {
        e.preventDefault();
        let name = document.getElementById('name').value;
        let email = document.getElementById('email').value;
        let order = document.getElementById('order').value;

        let invoertekst = document.getElementById("invoertekst");
        invoertekst.innerHTML = `The order for the customer ${name}  is the following: ${order} . The customer may be notified by email: ${email} `


    },
}

orderForm.initfields();