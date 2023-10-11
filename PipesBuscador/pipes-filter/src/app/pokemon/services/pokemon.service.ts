import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FetchAllPokemonResponse, Pokemon } from '../interfaces/pokemon.interfaces';

import {map} from 'rxjs/operators'; //permite romar una respuesta y regresar de acuerdo a su nencesiddad
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  private url: string = 'https://pokeapi.co/api/v2'; //conexion para mi api externa

  constructor(private http: HttpClient) { } //llamamos a mi Htpclient


  //metodo para que retorne la informacion de tippo FetchAllPokemonResponse
  getAllPpokemons():Observable<Pokemon[]>{
   return this.http.get<FetchAllPokemonResponse>(`${this.url}/pokemon?limit=1500/`)//observable devuelve infromacio hasta que alguien se suscriba
   .pipe(
    map(this.trasnformSmallPokemonIntoPokemon)
   )
  }

  private trasnformSmallPokemonIntoPokemon(resp: FetchAllPokemonResponse):Pokemon[]{
    const pokemonList: Pokemon[] = resp.results.map( poke => {
      const urlArr = poke.url.split('/');
      const id = urlArr[6];
      const pic = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`

      return{
        id: id,
        name: poke.name,
        pic: pic
      }
    })
    return pokemonList
  }

}
