interface AudioPlayer{
    audioVolumen: number;
    songDuration: number;
    song: string;
    details: Details;
}

interface Details{
    author: string;
    year: number;
}


const audioPLayer: AudioPlayer = {
    audioVolumen: 90,
    songDuration: 36,
    song: "Mess",
    details:{
        author: "Ed Sheeran",
        year: 2015
    }
}

const song = "New song"

const {song:anotherSong, audioVolumen: desAudio, details} = audioPLayer;
const {author} = details; 
/**
console.log("Valor destructurado",anotherSong)
console.log("Valor destructurado",desAudio)
console.log("Valor destructurado",author)
 */

//Desestructuracion de arreglos []

const [ , , trunks, p3 = 'no existe']:string[] = ['Goku', 'Vegeta', 'trunks'];
console.log("arreglo desestruturado:",trunks)
console.log("arreglo desestruturado:",p3)















export{}