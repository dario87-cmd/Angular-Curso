import {Product} from './06-function-destructuring'; 
import {taxtCalculation} from './06-function-destructuring';

const shopingCart: Product[] = [
    {
        description:'Nokia',
        price: 100
    },
    {
        description:'iPad',
        price:150
    }
];

const tax = 0.15;

const[total, taxTotal] = taxtCalculation({
    products:shopingCart,
    tax:tax,
});


console.log('Total', total);
console.log('taxTotal', taxTotal);


