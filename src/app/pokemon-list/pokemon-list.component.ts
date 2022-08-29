import { Component, OnInit } from '@angular/core';

import { PokemonModel } from "../models";
import { PokemonService } from '../services/pokemon.service';

@Component({
  selector: 'pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.scss'],
})
export class PokemonListComponent implements OnInit {
  public pokemonList: PokemonModel[] = [];
  constructor(private pokemonService: PokemonService) {}

  async ngOnInit() {
    this.pokemonList = await this.pokemonService.getPokemons();
    console.log(this.pokemonList);
  }
}
