/* eslint-disable */
import { Component } from '@angular/core';
import { ServiceAcviteComponentsService } from 'src/app/services/service-acvite-components.service';
import { DataHabilities } from 'src/app/data/data-habilities';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-detail-skills',
  templateUrl: './detail-skills.component.html',
  styleUrls: ['./detail-skills.component.css']
})


export class DetailSkillsComponent {

  subscription: Subscription;
  object: any;
  id: number = 0;
  name: string = "";
  description: string = "";
  detail: string[] = [];
  objectDetail: DataDetail;

  constructor(private serviceFlagActiveComponents: ServiceAcviteComponentsService) {

    this.objectDetail = {} as DataDetail;

    this.subscription = this.serviceFlagActiveComponents.dataDetailSkill$.subscribe(dataDetail => {

      this.object = JSON.parse(JSON.stringify(dataDetail));
      console.log("detail skills recibido", this.object);

      try {
        if (this.object) {
          console.log("detail skills recibido", this.object);
          const { id, name, description, detail } = this.object;
          this.objectDetail.id = id;
          this.objectDetail.name = name;
          this.objectDetail.description = description;
          this.objectDetail.detail = detail;

        } else {
          console.error('La estructura de dataDetail no es la esperada.');
        }
      } catch (error) {
        console.error('Error al analizar los datos JSON:', error);
      }
    });


  }

  returnMenuSkills() {
    this.serviceFlagActiveComponents.sendFlagSkills(true);
  }


}

interface DataDetail {
  id: number;
  name: string;
  description: string;
  detail: any[];
}
