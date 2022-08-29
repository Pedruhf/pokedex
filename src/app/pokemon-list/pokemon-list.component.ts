import { Component, OnInit } from '@angular/core';
import { PokemonModel } from "../models";

@Component({
  selector: 'pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.scss'],
})
export class PokemonListComponent implements OnInit {
  pokemonList: PokemonModel[] = [
    { id: "001", name: "Charmander" },
    { id: "002", name: "Ivysaur" },
    { id: "003", name: "Pika" },
  ];
  constructor() { }
  
  ngOnInit(): void { }
}
