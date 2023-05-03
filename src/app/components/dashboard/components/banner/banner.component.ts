import { Component, Input } from '@angular/core';
import {faUser, faSquarePlus, faBed, faCircleExclamation} from '@fortawesome/free-solid-svg-icons'
import {World} from '../../../../types/dashboard'

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss']
})
export class BannerComponent {
  userIcon = faUser
  plusIcon = faSquarePlus
  bedIcon = faBed
  warningIcon = faCircleExclamation

  @Input() data!: World 
}
