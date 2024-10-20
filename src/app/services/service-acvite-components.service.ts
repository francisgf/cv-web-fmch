import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServiceAcviteComponentsService {

  //Flag para activar la vista del menu y detalle
  private flagActiveComponentsWorks = new BehaviorSubject<boolean>(true);
  flagWorks$ = this.flagActiveComponentsWorks.asObservable();

  // objeto para enviar datos del componente menu work al componente detail work
  private dataDetailComponentsWorks = new BehaviorSubject<object>([]);
  dataDetail$ = this.dataDetailComponentsWorks.asObservable();

  private fragActiveComponentsSkills = new BehaviorSubject<boolean>(true);
  flagSkills$ = this.fragActiveComponentsSkills.asObservable();

  private dataDetailComponentsSkills = new BehaviorSubject<object>([]);
  dataDetailSkill$ = this.dataDetailComponentsSkills.asObservable();


  sendFlag(flag: boolean) {
    this.flagActiveComponentsWorks.next(flag);
  }

  sendFlagSkills(flag: boolean) {
    this.fragActiveComponentsSkills.next(flag);
  }



  //enviar y obtener datos del objeto work
  sendDetailObject(arrayObject: object[]) {
    this.dataDetailComponentsWorks.next(arrayObject);
  }

  getDataObject() {
    console.log("tipoDato:", this.dataDetail$);
    return this.dataDetail$;
  }

    //enviar y obtener datos del objeto skill
  sendDetailObjectSkill(arrayObject: object[]) {
    this.dataDetailComponentsSkills.next(arrayObject);
  }

  getDataObjectSkill() {
    console.log("tipoDato:", this.dataDetailSkill$);
    return this.dataDetailSkill$;
  }
}
