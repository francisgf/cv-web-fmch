/* eslint-disable */
import { Component, Input } from '@angular/core';
import { Subscription } from 'rxjs';
import { ServiceAcviteComponentsService } from 'src/app/services/service-acvite-components.service';

@Component({
  selector: 'app-detail-work',
  templateUrl: './detail-work.component.html',
  styleUrls: ['./detail-work.component.css']
})
export class DetailWorkComponent {


  @Input() detailObj!: Object;

  subscription: Subscription;
  object: any;
  companyName: string = "";
  companyIcon: string = "";

  detailArray: String[] = [];

  constructor(public serviceFlagActive: ServiceAcviteComponentsService) {
    this.subscription = this.serviceFlagActive.dataDetail$.subscribe(dataDetail => {


      this.object = JSON.parse(JSON.stringify(dataDetail));
      try {
        if (this.object && this.object.detail) {
          this.companyName = this.object.name;
          this.companyIcon = this.object.icon;
          this.detailArray = this.object.detail;

          this.detailArray.forEach((detalle, index) => {
            console.log(`Detalle ${index + 1}: ${detalle}`);
          });
        } else {
          console.error('La estructura de dataDetail no es la esperada.');
        }
      } catch (error) {
        console.error('Error al analizar los datos JSON:', error);
      }
    });
  }

  returnMenu() {
    this.serviceFlagActive.sendFlag(true);
  }

}
