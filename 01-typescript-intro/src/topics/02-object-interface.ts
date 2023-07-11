
const skills: String[] = ['Bash', 'Counter', 'Healing']; //especificamos de que tipo es el array 


//Interface: nos ayuda a definir a los objetos como queremos que luscan de que tipo de valores son 

interface Character  {
    name: string
    hp: number,
    skill: string[],
    hometown?:string //? con esete simbolo especificamos que es un valor no definido y asi evitamos definir el valor 
}



const strider:Character =  {
    name: 'Strider',
    hp: 100,
    skill: ['Bash', 'Counter']

};

strider.hometown = 'Rivendell'

console.table(strider)






export{}