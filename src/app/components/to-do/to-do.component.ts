import { Component } from '@angular/core';
import { faRectangleXmark } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-to-do',
  templateUrl: './to-do.component.html',
  styleUrls: ['./to-do.component.scss']
})
export class ToDoComponent {
  closeIcon = faRectangleXmark
}
