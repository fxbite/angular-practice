import { Component } from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms'

@Component({
  selector: 'app-basic-form',
  templateUrl: './basic-form.component.html',
  styleUrls: ['./basic-form.component.scss']
})
export class BasicFormComponent {
  constructor(private fb: FormBuilder) { }
  contactForm = this.fb.group({
    name: ['', Validators.required],
    email: ['', Validators.required, Validators.email],
    phone: ['', Validators.required, Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")],
    message: ['', Validators.required]
  })

  submit() {
    console.log(this.contactForm.value)
  }
}
