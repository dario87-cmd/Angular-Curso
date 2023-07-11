export function whatsMyType<T>(argument: T):T{
    return argument;
}

const amIstring = whatsMyType<string>('Hola mundo');
const amINumber = whatsMyType<number>(100);
const amIArray = whatsMyType<number[]>([1,0,5,2]);


console.log(amIstring.split(''));
console.log(amINumber.toFixed());
console.log(amIArray.join('-'));
