import { Component } from '@angular/core';
import { MailService } from 'src/app/services/mail.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
})
export class ContactComponent {
  name: String = '';
  email: String = '';
  messaje: String = '';
  private datos: any;
  isViewLoader: boolean = false;
  isVireMessaje: boolean = false;
  isActiveClass: boolean = false;

  isDisabledBtn: boolean = true; //boton inicia desactivado
  successMessaje: String = 'Su mensaje fue enviado, gracias';
  errorMessaje: String = 'ocurrió un error al enviar el mensaje';
  uiMessage: String = '';

  constructor(private mailServices: MailService) {}

  sendEmail() {
    this.isViewLoader = true;
    this.callSendMail();
  }

  callSendMail() {
    this.mailServices.postSendMail().subscribe((data) => {
      this.datos = data;
      if (this.datos == true) {
        this.isViewLoader = false;
        this.isVireMessaje = true;
        this.uiMessage = this.successMessaje;
        this.isActiveClass = true;
        console.log(this.datos);
      } else {
        this.isViewLoader = false;
        this.isVireMessaje = true;
        this.uiMessage = this.errorMessaje;
        this.isActiveClass = false;
        console.log('error en conección');
      }
    });
  }

  onKeyUp(event: any) {
    this.validateInputs();
  }

  validateInputs() {
    if (this.name != '' && this.email != '' && this.messaje != '') {
      this.isDisabledBtn=false; //boton activado

    }else{
      this.isDisabledBtn=true; //boton desactivado
    }
  }
}
