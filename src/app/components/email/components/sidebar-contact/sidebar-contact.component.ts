import { Component, OnInit } from '@angular/core';
import { EmailService } from '../../../../services/email.service'

@Component({
  selector: 'app-sidebar-contact',
  templateUrl: './sidebar-contact.component.html',
  styleUrls: ['./sidebar-contact.component.scss']
})
export class SidebarContactComponent implements OnInit {
  // cities: City[];

  // selectedCity: City;

  constructor(private emailService: EmailService) {}

  ngOnInit(): void {
    this.emailService.getContact().subscribe(data => {

    })
  }
}
