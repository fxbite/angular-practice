import { Component, OnInit } from '@angular/core';
import { EmailService } from '../../services/email.service';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-email',
  templateUrl: './email.component.html',
  styleUrls: ['./email.component.scss']
})
export class EmailComponent implements OnInit {
  items: MenuItem[] = [];

  activeItem!: MenuItem;

  constructor(private emailService: EmailService) {}

  ngOnInit() {
    this.items = [
      { label: 'Message', icon: 'pi pi-fw pi-home' },
      { label: 'Contact', icon: 'pi pi-fw pi-calendar' },
      { label: 'Preferences', icon: 'pi pi-fw pi-pencil' },
    ];

    this.activeItem = this.items[0];

    this.emailService.getMessage().subscribe((data: any) => {
      
    })
  }
}
