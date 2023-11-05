import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss'],
})
export class ContactFormComponent implements OnInit {
  @ViewChild('myForm') myForm!: ElementRef;
  @ViewChild('nameField') nameField!: ElementRef;
  @ViewChild('messageField') messageField!: ElementRef;
  @ViewChild('sendButton') sendButton!: ElementRef;

  @ViewChild('nameError') nameError!: any;
  nameValid: boolean = true;

  @ViewChild('mailError') mailError!: any;
  mailValid: boolean = true;

  @ViewChild('msgError') msgError!: any;
  msgValid: boolean = true;
 
  constructor() {}

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
      let messageField = this.messageField.nativeElement;
      let sendButton = this.sendButton.nativeElement;

      nameField.disabled = true;
      messageField.disabled = true;
      sendButton.disabled = true;

      let formData = new FormData();
      formData.append('name', nameField.value);
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

  checkName(){
    if (this.nameField.nativeElement.value.length>3) {      
      this.nameValid = true;
    }
    else{
      this.nameValid = false;
    }
  }

   
}
