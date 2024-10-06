import { AsyncPipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { CharactersService } from '../../services/characters/characters.service';


@Component({
  selector: 'app-main-container',
  standalone: true,
  imports: [AsyncPipe],
  templateUrl: './main-container.component.html',
  styleUrl: './main-container.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MainContainerComponent {

  private characterService= inject(CharactersService);
  characters$ = this.characterService.getCharacters();

}
