import { Component, Input } from '@angular/core';
import { Video } from 'src/app/types/youtube';
import { SafePipe } from 'src/app/pipe/safe.pipe';

@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.scss'],
  providers: [SafePipe]
})
export class VideoComponent {
  visible!: boolean;
  selectedItem!: Video
  @Input() data!: Video[]

  showDialog(item: Video) {
      this.visible = true;
      this.selectedItem = item
  }
}
