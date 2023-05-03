import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class EmailService {

  constructor(private http: HttpClient) { }

  getMessage() {
    return this.http.get('assets/messages.json')
  }

  getContact() {
    return this.http.get('assets/contact.json')
  }
}
