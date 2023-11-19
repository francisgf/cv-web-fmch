import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ModalAboutMeService {

  constructor() { }

  private showModalAboutMe = new Subject<boolean>();
  showModalAboutMe$ = this.showModalAboutMe.asObservable();

  openModal() {
    this.showModalAboutMe.next(true);
  }

  closeModal() {
    this.showModalAboutMe.next(false);
  }
}
