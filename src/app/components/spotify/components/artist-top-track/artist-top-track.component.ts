import { Component, Input } from '@angular/core';
import { faCircleInfo, faPlay } from '@fortawesome/free-solid-svg-icons';
import { Track } from '../../../../types/spotify'

@Component({
  selector: 'app-artist-top-track',
  templateUrl: './artist-top-track.component.html',
  styleUrls: ['./artist-top-track.component.scss']
})
export class ArtistTopTrackComponent {
  typeIcon = faCircleInfo
  playIcon = faPlay
  @Input() data!: Track[]
}
