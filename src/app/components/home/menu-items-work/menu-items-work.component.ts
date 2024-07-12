import { Component } from '@angular/core';
import { Data } from '../data';
import { ServiceAcviteComponentsService } from 'src/app/services/service-acvite-components.service';

@Component({
  selector: 'app-menu-items-work',
  templateUrl: './menu-items-work.component.html',
  styleUrls: ['./menu-items-work.component.css']
})
export class MenuItemsWorkComponent {

  arrayEmpresas: any[] = [];
  dataDetail: object[] = []
  detailObjParent: object[] = []

  constructor(public dataStatic: Data, public serviceActiveFlag: ServiceAcviteComponentsService) {
    this.arrayEmpresas = dataStatic.dataEmpresas.arrayData;
    this.dataStatic.getLocation();
  }

  sendFlagWorksToHome() {
    this.serviceActiveFlag.sendFlag(false);
  }

  sendObjectDataDetail(datosEnvio: object[]) {
    this.serviceActiveFlag.sendDetailObject(datosEnvio);
  }

  sendDataToDetal(nameItem: string) {

    console.log("dato-recibido-html", nameItem)
    if (nameItem == "Interbank") {
      this.dataDetail = this.dataStatic.dataEmpresas.arrayData[0];
    }
    if (nameItem == "Avatar") {
      this.dataDetail = this.dataStatic.dataEmpresas.arrayData[1];
    }

    if (nameItem == "Coppel-Mx") {
      this.dataDetail = this.dataStatic.dataEmpresas.arrayData[2];
    }
    this.sendObjectDataDetail(this.dataDetail);
  }


}
