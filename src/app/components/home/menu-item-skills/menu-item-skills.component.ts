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

  arraySend: any[] = [];
  arraySkills: any[] = [];

  itemDevWebSkills: string = "DEVWEB";
  itemDevDb: string = "DEVDB";

  constructor(public dataStatic: Data, public serviceFlagActiveComponent: ServiceAcviteComponentsService) {

    this.arraySkills = dataStatic.dataSkills.arraySkills;
    console.log("arraySkills: ", this.arraySkills);

  }
  sendFlagDetailSkills() {
    this.serviceFlagActiveComponent.sendFlagSkills(false);
  }

  sendDataToDetail(nameItem: string) {

    if (nameItem == this.itemDevWebSkills) {
      this.arraySend = this.arraySkills[0];
    }
    if (nameItem == this.itemDevDb) {
      this.arraySend = this.arraySkills[1];
    }

    this.sendObjectSkillDetail(this.arraySend);
  }

  sendObjectSkillDetail(sendData: object[]) {
    this.serviceFlagActiveComponent.sendDetailObjectSkill(sendData);
    console.log("datosEnvio", sendData)
  }



}
