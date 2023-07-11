//Calcular el impuesto sobre la vente 
export interface Product{
    description: string;
    price: number;
}

//creacion de objetos que implementan la interface producto
const phone: Product = {
    description: 'Nokia',
    price: 150.0
}

const tablet:Product = {
    description: 'iPad Air',
    price: 250.0
}

//es un objeto 
interface taxCalculationOptions{
    tax: number,
    products:Product[]
}

//Desestructurar: enviamos un objeto
export function taxtCalculation(options: taxCalculationOptions): number[] {
    const {tax, products} = options;
    let total = 0;
    
//Desestructurar
    products.forEach(({price}) => {
        total += price
    });
    return[total, total * tax] //retorna el total y el tax, calcula el impuesto 
}

const shoppingCart = [phone, tablet];//almacena los productos que compra
const tax = 0.15; //valor del impuesto por cada producto

//taxtCaculation tiene el valor retornado de la funcion taxcalculation que es un array 
//Usamos la funcion taxtCalculation
const [total, taxTotal] = taxtCalculation({
    products:shoppingCart,
    tax:tax
})

console.log('Total', total);
console.log('Tax', taxTotal);

