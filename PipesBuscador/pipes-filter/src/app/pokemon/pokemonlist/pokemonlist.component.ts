import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../services/pokemon.service';
import { Pokemon } from '../interfaces/pokemon.interfaces';

@Component({
  selector: 'app-pokemonlist',
  templateUrl: './pokemonlist.component.html',
  styleUrls: ['./pokemonlist.component.scss']
})
export class PokemonlistComponent implements OnInit {

  public pokemons: Pokemon[] = [];
  public page: number = 0; //variable que pasamos al filtro
  public search:string = '';

  constructor(private pokemonService: PokemonService){ //llamamos a mi servicio

  }

  //metodo que recupera los datos de la peticion
  ngOnInit(): void {

    this.pokemonService.getAllPpokemons()
    .subscribe( pokemones => {
      this.pokemons = pokemones;
    })
  }

  nextPage(){
    this.page += 5;
  }

  prevPage(){
    if (this.page > 0)
    this.page -= 5;
  }

  //metodo para crear filtros
  onSearchPokemon(search: string){
    this.page = 0;
    this.search = search;

  }


}
