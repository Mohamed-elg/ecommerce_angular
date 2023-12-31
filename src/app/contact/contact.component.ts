import { Component } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  Contact: FormGroup;
  formSubmitted:boolean=false;
  buttonClicked: boolean = false;

  constructor(private formBuilder: FormBuilder) {
    this.Contact = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      subject: ['', Validators.required],
      message: ['', Validators.required],
    });
  }

  onSubmit() {
    if (this.Contact.valid) {
      const email = this.Contact.get('email')?.value;
      const subject = this.Contact.get('subject')?.value;
      const message = this.Contact.get('message')?.value;
      alert(`Email: ${email}\nSubject: ${subject}\nMessage: ${message}`);
      this.formSubmitted = true;
    }
  }

}
