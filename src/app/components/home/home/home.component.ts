import { Component, Input } from '@angular/core';
import { OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Data } from './data';
import { ModalAppService } from '../../../services/modal-app.service'
import { ModalAboutMeService } from 'src/app/services/modal-about-me.service';
import { DataHabilities } from 'src/app/data/data-habilities';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  countItem: number = 0;
  countIndex: number = 0;
  isViewBtnPositive: boolean = true;
  isViewBtnNegative: boolean = false;

  stSkills: String = '';
  isSetOpacity: boolean = false;
  stExperience: string = '';
  nameCompany: String = '';
  position: String = '';
  DateLocation: String = '';

  experienceArray:String[]=[];


  sendTitleForModal: String = "";
  sendTitleAboutMe:String="Sobre mi"
  sedDataHablilities: String[] = [];
  sendResume: String = "";

  constructor(private router: Router, public dataStatic: Data, public modalService: ModalAppService, public modalAboutMe:ModalAboutMeService, public habilities: DataHabilities) {
    this.changeItemExpiriens();
    this.dataStatic.getLocation();

  }

  openModal(ventana: Number) {
    this.sendTitleModal(ventana);
    this.modalService.openModal();
    console.log("se abre modal");
  }

  openModalMi() {
    this.sendResume= this.dataStatic.resumeAbouMe;
    this.modalAboutMe.openModal();
    this.flecha();
   
  }


  sendTitleModal(ventana: Number) {
    if (ventana == 1) {
      this.sendTitleForModal = "Tecnologías web";
      this.sedDataHablilities = this.habilities.fullStack;
    }
    if (ventana == 2) {
      this.sendTitleForModal = "Gestore de Bases de datos";
      this.sedDataHablilities = this.habilities.fullStackDB;

    }

  }

  ngOnInit() {
    this.countItem + 1;
  }

  navigateContact() {
    this.router.navigate(['/contact']);
  }


  changeItemExpiriens() {
    this.countItem++;
    if (this.countItem == 1) {
      this.nameCompany = this.dataStatic.objCoopel.name;
      this.position = this.dataStatic.objCoopel.position;
      this.DateLocation = this.dataStatic.objCoopel.DateLocation;
      this.stExperience = this.dataStatic.objCoopel.detail;
      this.experienceArray=this.dataStatic.objCoopel.resumeArray;
    } else if (this.countItem == 2) {
      this.nameCompany = this.dataStatic.objInterbank.name;
      this.position = this.dataStatic.objInterbank.position;
      this.DateLocation = this.dataStatic.objInterbank.DateLocation;
      this.stExperience = this.dataStatic.objInterbank.detail;
      this.experienceArray=this.dataStatic.objInterbank.resumeArray;

    } else if (this.countItem == 3) {
      this.nameCompany = this.dataStatic.objCencosud.name;
      this.position = this.dataStatic.objCencosud.position;
      this.DateLocation = this.dataStatic.objCencosud.DateLocation;
      this.stExperience = this.dataStatic.objCencosud.detail;
      this.experienceArray=this.dataStatic.objCoopel.resumeArray;

      this.isViewBtnPositive = false;
      this.isViewBtnNegative = true;
    }
    console.log('contador' + this.countItem);
    this.isSetOpacity = false;
    console.log('Variable' + this.isSetOpacity);
    this.setClassAnimation();
  }

  changeItemExpiriensNegative() {
    this.countItem--;
    if (this.countItem == 1) {
      this.nameCompany = this.dataStatic.objInterbank.name;
      this.stExperience = this.dataStatic.objInterbank.detail;
      this.isViewBtnPositive = true;
      this.isViewBtnNegative = false;
    } else if (this.countItem == 2) {
      this.nameCompany = this.dataStatic.objCoopel.name;
      this.stExperience = this.dataStatic.objCoopel.detail;
    } else if (this.countItem == 3) {
      this.nameCompany = this.dataStatic.objCencosud.name;
      this.stExperience = this.dataStatic.objCencosud.detail;
    }
    console.log('contador' + this.countItem);
    this.isSetOpacity = false;
    console.log('Variable' + this.isSetOpacity);
    this.setClassAnimation();
  }

  setClassAnimation() {
    setTimeout(() => {
      this.isSetOpacity = true;
      console.log('Variable' + this.isSetOpacity);
    }, 0.001); // Cambiar a true después de 3 segundos (3000 milisegundos)
  }

  flecha=()=>{
    alert("Se llamo ala fn flecha");

  }
}
