import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.sass'],
})
export class PokemonListComponent implements OnInit {
  pokemonList = [
    { name: "Charmander" },
    { name: "Ivysaur" },
    { name: "Pika" },
  ];
  constructor() { }
  
  ngOnInit(): void { }
}
