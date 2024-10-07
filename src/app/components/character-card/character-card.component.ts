import { ChangeDetectionStrategy, Component, input, InputSignal, output } from '@angular/core';
import { Character } from '../../models/characters.model';
import { JsonPipe, NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-character-card',
  standalone: true,
  imports: [NgOptimizedImage, JsonPipe],
  templateUrl: './character-card.component.html',
  styleUrl: './character-card.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CharacterCardComponent {

  character = input.required<Character>();
  characterInfo = input<Character>();
  loaded = output<string>();

  ngOnInit() {
    this.loaded.emit(this.character().url);
  }

}
