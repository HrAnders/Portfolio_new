import {
  Component,
  ElementRef,
  Input,
  OnInit,
  ViewChild,
  Renderer2,
} from '@angular/core';
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
      let inputElements = this.getInputElements();
      this.enableInputElements(inputElements);

      //await fetch(
      //  'https://stefan-anders.developerakademie.net/Formular/send_mail.php',
      //  {
      //    method: 'POST',
      //    body: this.setFormdata(inputElements)
      //    ,
      //  }
      //),

     this.disableInputElements(inputElements);

    } catch (error) {
      console.log(error);
    }
  }

  getInputElements(){
    let nameField = this.nameField.nativeElement;
    let mailField = this.mailField.nativeElement;
    let messageField = this.messageField.nativeElement;
    let sendButton = this.sendButton.nativeElement;
    return {nameField, mailField, messageField, sendButton}
  }

  disableInputElements(inputElements: any){
    inputElements['nameField'].disabled = true;
    inputElements['mailField'].disabled = true;
    inputElements['messageField'].disabled = true;
    inputElements['sendButton'].disabled = true;
  }

  enableInputElements(inputElements: any){
    inputElements['nameField'].disabled = false;
    inputElements['mailField'].disabled = false;
    inputElements['messageField'].disabled = false;
    inputElements['sendButton'].disabled = false;
  }

  setFormdata(inputElements:any){
    let formData = new FormData();
    formData.append('name', inputElements['nameField'].value);
    formData.append('mail', inputElements['mailField'].value);
    formData.append('message', inputElements['messageField'].value);
    return formData
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
      this.renderer.setProperty(
        this.mailError.nativeElement,
        'innerHTML',
        'Please enter a valid email address.'
      );
    } else {
      this.mailError.nativeElement.hidden = true;
    }
  }

  checkMessage() {
    if (this.msgInput.length > 10) {
      this.msgError.nativeElement.hidden = true;
    } else {
      this.msgError.nativeElement.hidden = false;
      this.renderer.setProperty(
        this.msgError.nativeElement,
        'innerHTML',
        'Your message is too short.'
      );
    }
  }
}
