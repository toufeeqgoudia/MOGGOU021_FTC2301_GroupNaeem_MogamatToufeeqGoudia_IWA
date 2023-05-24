const FREE_WARNING = 'Free shipping only applies to single customer orders';
const BANNED_WARNING = 'Unfortunately we do not ship to your country of residence';
const NONE_SELECTED = 0;

let customers = 1;
let location = 'RSA';
let currency = 'R';
let shipping = 0;

shoes = 300 * 1;
toys = 100 * 5;
shirts = 150 * NONE_SELECTED;
batteries = 35 * 2;
pens = 5 * NONE_SELECTED;

let products = shoes + toys + shirts + batteries + pens;

if (products < 1000 && (location = 'NAM')) {
    shipping = 600;
} else {
    shipping = 800;
}

if (products < 1000 && (location = 'RSA')) {
    shipping = 400;
    currency = 'R';
}

if (products > 1000 && customers === 1 && (location = 'RSA' || 'NAM') ) {
    shipping = 0;
} 

if (shipping == 0 && customers !== 1) {
    console.log(FREE_WARNING);
}

if (location = 'NK') {
    console.log(BANNED_WARNING);
}


console.log('price', currency, products + shipping)