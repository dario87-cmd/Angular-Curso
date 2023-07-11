export interface Passenger{
    name:string,
    children?:string[]
}

const passenger1:Passenger = {
    name: 'Fernando'
}
const passenger2:Passenger = {
    name: 'Fernando',
    children:['Natalia', 'Elizabeth'],
}


const  printChildren = (passenger:Passenger) => {

    const howManyChildren = passenger.children?.length || 0 ;//Si tiene hijos ? saca la cantidad si no || es 0 
    //const howManyChildren = passenger.children!.length //siempre vas a recivir un valor 
    console.log(passenger.name, howManyChildren);
}

printChildren(passenger2); //pasamos por parametros los valores del segundo pasajero