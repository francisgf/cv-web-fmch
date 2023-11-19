import { Component, Input } from '@angular/core';
import { ModalAboutMeService } from 'src/app/services/modal-about-me.service';

@Component({
  selector: 'app-modal-aboutme',
  templateUrl: './modal-aboutme.component.html',
  styleUrls: ['./modal-aboutme.component.css']
})
export class ModalAboutmeComponent {

 
@Input() appTitle:String="";
@Input()  resumeAboutMe:String ="";
constructor(public modalService: ModalAboutMeService){
  console.log("se ejecuta eñ modal sobre mi:" + this.resumeAboutMe)

}

closeModal() {
  this.modalService.closeModal();
}

}
