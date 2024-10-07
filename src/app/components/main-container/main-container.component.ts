import { AsyncPipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { CharactersService } from '../../services/characters/characters.service';
import { CharacterCardComponent } from '../character-card/character-card.component';
import { firstValueFrom, Observable } from 'rxjs';
import { Character } from '../../models/characters.model';


@Component({
  selector: 'app-main-container',
  standalone: true,
  imports: [AsyncPipe, CharacterCardComponent],
  templateUrl: './main-container.component.html',
  styleUrl: './main-container.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class MainContainerComponent {

  private characterService= inject(CharactersService);
  characters$ : Observable<Character[]> = this.characterService.getCharacters();

  characterInfo: Record<string, Character> = {};

  async makeApiCall(url: string) {
    let character = await firstValueFrom(
      this.characterService.getCharacterInformation(url)
    );
    this.characterInfo[character.id] = character;
  }

}
