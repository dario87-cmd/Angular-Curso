import { Person } from './08-clases';
//definir clases en typScript
export class Person{
   // public name: string;
   // private address: string;

/**   constructor(name: string, address: string){ //
        this.name = name,
        this.address = address;
    }
*/  
    constructor(
        public firstName: string, 
        public lastName: string,
        public address: string = 'No Addresss'
        ){ }
}

//extender una clase
/**
export class Hero extends Person{
    constructor (
        public alterEgo: string,
        public age: number,
        public realName: string,
        
    ){
        super(realName, 'New York'); //utilizamos el super para extender la clase
    }
}
 */

export class Hero {
    //public person: Person;
    constructor (
        public alterEgo: string,
        public age: number,
        public realName: string,
        public person: Person //solicito que me manden la informacion de Persona
        
    ){
       // this.person = new Person(realName);    
    }
}

const tony = new Person('Tony','stark', 'New York' );
const iroman = new Hero('IronMan',45, 'Tony', tony);
console.log(iroman);

