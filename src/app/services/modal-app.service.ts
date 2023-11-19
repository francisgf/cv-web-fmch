import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ModalAppService {
  constructor() {}

  private showModalSource = new Subject<boolean>();
  showModal$ = this.showModalSource.asObservable();

  openModal() {
    this.showModalSource.next(true);
  }

  closeModal() {
    this.showModalSource.next(false);
  }
}
