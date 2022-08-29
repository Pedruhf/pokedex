import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { PokemonModel } from '../models';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  constructor(private httpClient: HttpClient) {}

  public async getPokemons(): Promise<PokemonModel[]> {
   const result = await this.httpClient.get<any>("https://pokeapi.co/api/v2/pokemon?limit=100").toPromise();
   return result.results;
  }
}
