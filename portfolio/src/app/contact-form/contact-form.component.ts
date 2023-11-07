import { Component, ElementRef, Input, OnInit, ViewChild,  Renderer2 } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss'],
})
export class ContactFormComponent implements OnInit {
  @ViewChild('myForm') myForm!: ElementRef;
  @ViewChild('nameField') nameField!: ElementRef;
  @ViewChild('mailField') mailField!: ElementRef;
  @ViewChild('messageField') messageField!: ElementRef;
  @ViewChild('sendButton') sendButton!: ElementRef;

  @ViewChild('nameError') nameError!: any;
  nameValid: boolean = true;
  nameInput: string = '';

  @ViewChild('mailError') mailError!: any;
  mailValid: boolean = true;
  mailInput: string = '';

  @ViewChild('templateForm') templateForm!: NgForm;

  @ViewChild('msgError') msgError!: any;
  msgValid: boolean = true;
  msgInput: string = '';

 
  constructor(private renderer: Renderer2) {}

  ngOnInit(): void {}

  async sendMail() {
    try {
      console.log(
        'Name: ' +
          this.nameField.nativeElement.value +
          ' Message: ' +
          this.messageField.nativeElement.value
      );
      let nameField = this.nameField.nativeElement;
      let mailField = this.mailField.nativeElement;
      let messageField = this.messageField.nativeElement;
      let sendButton = this.sendButton.nativeElement;

      nameField.disabled = true;
      messageField.disabled = true;
      sendButton.disabled = true;

      let formData = new FormData();
      formData.append('name', nameField.value);
      formData.append('mail', mailField.value);
      formData.append('message', messageField.value);

      await fetch(
        'https://stefan-anders.developerakademie.net/Formular/send_mail.php',
        {
          method: 'POST',
          body: formData,
        }
      ),
      nameField.disabled = false;
      messageField.disabled = false;
      sendButton.disabled = false;
    } catch (error) {
      console.log(error);
    }
  }

  checkName() {
    if (this.nameInput.length > 3) {
      this.nameError.nativeElement.hidden = true;
    } else {
      this.nameError.nativeElement.hidden = false;
    }
  }

  checkMail() {
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  
    if (!emailPattern.test(this.mailInput)) {
      this.mailError.nativeElement.hidden = false;
      this.renderer.setProperty(this.mailError.nativeElement, 'innerHTML', 'Please enter a valid email address');
    } else {
      this.mailError.nativeElement.hidden = true;
    }
  }
  

   
}
