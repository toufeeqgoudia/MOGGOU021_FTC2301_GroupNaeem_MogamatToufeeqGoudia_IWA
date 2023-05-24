// scripts.js

const STATUS_MAP = {
    shelf: {
        color: 'green',
        canReserve: true,
        canCheckout: true,
        canCheckIn: false,
    },
    reserved: {
        color: 'blue',
        canReserve: false,
        canCheckout: true,
        canCheckIn: false,
    },
    overdue: {
        color: 'red',
        canReserve: false,
        canCheckout: false,
        canCheckIn: true,
    },
    checkedOut: {
        color: 'orange',
        canReserve: false,
        canCheckout: false,
        canCheckIn: true,
    }
}

// Edit below line 

const book1 = document.getElementById('book1');
const book1Status = book1.querySelector('.status');
const book1Reserve = book1.querySelector('.reserve');
const book1Checkout = book1.querySelector('.checkout');
const book1Checkin = book1.querySelector('.checkin');

const book2 = document.getElementById('book2');
const book2Status = book2.querySelector('.status');
const book2Reserve = book2.querySelector('.reserve');
const book2Checkout = book2.querySelector('.checkout');
const book2Checkin = book2.querySelector('.checkin');

const book3 = document.getElementById('book3');
const book3Status = book3.querySelector('.status');
const book3Reserve = book3.querySelector('.reserve');
const book3Checkout = book3.querySelector('.checkout');
const book3Checkin = book3.querySelector('.checkin');

book1Status.style.color = STATUS_MAP.overdue.color;
book1Reserve.disabled = STATUS_MAP.overdue.canReserve ? false : true;
book1Checkout.disabled = STATUS_MAP.overdue.canCheckout ? false : true;;
book1Checkin.disabled = STATUS_MAP.overdue.canCheckIn ? false : true;

book2Status.style.color = STATUS_MAP.reserved.color;
book2Reserve.disabled = STATUS_MAP.reserved.canReserve ? false : true;
book2Checkout.disabled = STATUS_MAP.reserved.canCheckout ? false : true;
book2Checkin.disabled = STATUS_MAP.reserved.canCheckIn ? false : true;

book3Status.style.color = STATUS_MAP.shelf.color;
book3Reserve.disabled = STATUS_MAP.shelf.canReserve ? false : true;
book3Checkout.disabled = STATUS_MAP.shelf.canCheckout ? false : true;
book3Checkin.disabled = STATUS_MAP.shelf.canCheckIn ? false : true;