/* eslint-disable */
import { Component } from '@angular/core';
import { Data } from '../data';
import { ServiceAcviteComponentsService } from 'src/app/services/service-acvite-components.service';

@Component({
  selector: 'app-menu-item-skills',
  templateUrl: './menu-item-skills.component.html',
  styleUrls: ['./menu-item-skills.component.css']
})

export class MenuItemSkillsComponent {

  arraySkills: any[] = [];

  constructor(dataStatic: Data, public serviceFlagActiveComponent: ServiceAcviteComponentsService) {
    this.arraySkills = dataStatic.dataSkills.arraySkills
  }

  sendFlagDetailSkills() {
    this.serviceFlagActiveComponent.sendFlagSkills(false);
  }

}
