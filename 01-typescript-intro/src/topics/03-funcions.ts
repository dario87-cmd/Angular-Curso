//Definicion de funcion 
//void significa que no retorna nada 

//funcion tradicional 
/** 
function addNumbers(a: number, b:number){
    return a + b;

}
*/

//funcion flecha
/** 
const addNumbersArrow = (a: number, b:number):string => {    
    return `${a + b}`;    
}
*/

//funcion multiple
/**
function multiplay(firstNumber: number, secondNumber?: number, base: number = 2){
    return firstNumber * base;
}

const result: number = addNumbers(1,2);
const result2: string = addNumbersArrow(1,2);
const result3: number = multiplay(5);
console.log({result, result2, result3})

 */

interface Character {
    name: string;
    hp: number;
    showHp: () => void; //  Declaramos una funcion dentro de una interface u objeto
}

//creamos una funcion con una variable de tipo objeto Character, tiene que cumplir esas caracteristicas
const healCharacter = (character: Character, amount: number) => {
    character.hp += amount;
}


//definimos el personaje
const strider: Character = {
    name: 'Strider',
    hp: 50,
    showHp() {
        console.log(`Puntos de vida ${this.hp}`)
    },
}

//creamos un nuevo personaje 
healCharacter(strider, 10);
healCharacter(strider, 20);
strider.showHp();






export{}