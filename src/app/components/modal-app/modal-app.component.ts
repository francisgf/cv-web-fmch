import { Component, Input } from '@angular/core';
import { ModalAppService } from '../../services/modal-app.service';

@Component({
  selector: 'app-modal-app',
  templateUrl: './modal-app.component.html',
  styleUrls: ['./modal-app.component.css'],
})
export class ModalAppComponent {

  @Input() appTitle: String = "";
  @Input() appDataHabilities: String[] = [];


  constructor(public modalService: ModalAppService) {


    console.log(this.appTitle)
  }

  closeModal() {
    this.modalService.closeModal();
  }
}
