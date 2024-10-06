import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Character, CharacterInfo } from '../../models/characters.model';
import { CharacterAdapter } from '../../adapters/characters/character.adapter';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CharactersService {

  private mainUrl: string = 'https://rickandmortyapi.com/api/';
  private charactersUrl: string = this.mainUrl + 'character';

  constructor( private http: HttpClient) { }

  getCharacters(): Observable<Character[]> {
    return this.http.get<CharacterInfo>(this.charactersUrl).pipe(
      map((result: CharacterInfo) =>  CharacterAdapter(result))
    )
  }

  getCharacterInformation(url: string): Observable<Character> {
    return this.http.get<Character>(url);
  }
}
