/* eslint-disable */
import { Component } from '@angular/core';
import { Data } from '../data';
import { DataHabilities } from 'src/app/data/data-habilities';
import { ServiceAcviteComponentsService } from 'src/app/services/service-acvite-components.service';

@Component({
  selector: 'app-menu-item-skills',
  templateUrl: './menu-item-skills.component.html',
  styleUrls: ['./menu-item-skills.component.css']
})

export class MenuItemSkillsComponent {

  arrayDevWebSkills: any[] = [];
  arrayDevDb: any[] = [];
  arraySend: any[] = [];

  arraySkills: any[] = [];

  itemDevWebSkills: string = "DEVWEB";
  itemDevDb: string = "DEVDB";

  constructor(public dataStatic: Data, public dataSkills: DataHabilities, public serviceFlagActiveComponent: ServiceAcviteComponentsService) {
    this.arrayDevWebSkills = dataSkills.devFullStack;
    this.arrayDevDb = dataSkills.fullStackDB;

    this.arraySkills = dataStatic.dataSkills.arraySkills;
    console.log( "arraySkills: ",this.arraySkills);

  }
  sendFlagDetailSkills() {
    this.serviceFlagActiveComponent.sendFlagSkills(false);
  }


  sendDataToDetail(nameItem: string) {

    console.log("dato-recibido-html", nameItem)

    if (nameItem == this.itemDevWebSkills) {
      this.arraySend = this.arraySkills[0];
    }
    if (nameItem == this.itemDevDb) {
      this.arraySend = this.arraySkills[1];
    }

console.log("Seleccionado:",this.arraySend );
    this.sendObjectSkillDetail(this.arraySend);
  }

  sendObjectSkillDetail(datosEnvio: object[]) {
    this.serviceFlagActiveComponent.sendDetailObject(datosEnvio);
    console.log("datosEnvio",datosEnvio)
  }



}
