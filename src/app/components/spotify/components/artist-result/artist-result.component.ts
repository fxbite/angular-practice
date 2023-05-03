import { Component, Input, Output, EventEmitter } from '@angular/core';
import { faTag, faMusic } from '@fortawesome/free-solid-svg-icons';
import { Artist } from '../../../../types/spotify';
import { NumberCommasPipe } from '../../../../pipe/number-commas.pipe'

@Component({
  selector: 'app-artist-result',
  templateUrl: './artist-result.component.html',
  styleUrls: ['./artist-result.component.scss'],
  providers: [NumberCommasPipe]
})
export class ArtistResultComponent {
  tagIcon = faTag
  trackIcon = faMusic
  @Input() data!: Artist[]
  @Output() event = new EventEmitter<string>()

  sendArtistId(id: string) {
    this.event.emit(id)
  }
}
