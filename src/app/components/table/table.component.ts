import { Component, OnInit } from '@angular/core';
import {TableService} from '../../services/table.service';
import { MessageService } from 'primeng/api';
import {User} from '../../types/tables';
import {PhoneFormatPipe} from '../../pipe/phone-format.pipe'

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
  providers: [MessageService, PhoneFormatPipe]
})
export class TableComponent implements OnInit {

  users: User[] = []

  selectedUser!: User 

  constructor(private tableService: TableService, private messageService: MessageService) { }

  ngOnInit() {
    this.tableService.getUsers()
      .subscribe(data => {
        this.users = data as User[]
      });
  }

  onRowSelect(event: any) {
    this.messageService.add({ severity: 'info', summary: 'User Selected', detail: event.data.lastName });
  }

  onRowUnselect(event: any) {
    this.messageService.add({ severity: 'info', summary: 'User Unselected', detail: event.data.lastName });
  }
}
