
interface SuperHeroe{
    name: string;
    age: number;
    adress:Adress //Creamos una nueva interface para objetos 
    showAdress: () => string;
}

//dividimos el objeto Andress en una interface para que sea mas estructurado 
interface Adress{
    Street:string;
    country: string;
    City: string;
}


const superHeroe: SuperHeroe = {
    name: 'Spiderman',
    age: 30,
    adress:{
        Street: 'Main St',
        country: 'USA',
        City: 'NY'
    },
    showAdress(){
        return this.name + ',' + this.adress.City + ',' + this.adress.country; 
    }
}

const address = superHeroe.showAdress();
console.log(address);



export{}