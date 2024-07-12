import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './components/menu/menu.component';
import { HomeComponent } from './components/home/home.component';
import { FooterComponent } from './components/footer/footer.component';
import { ContactComponent } from './components/contact/contact.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
/*Se inporta clase data de home*/
import { Data } from './components/home/data';
import { DataHabilities } from './data/data-habilities';
import { ModalAppComponent } from './components/modal-app/modal-app.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ModalAboutmeComponent } from './components/modal-aboutme/modal-aboutme.component';
import { HobbiesComponent } from './components/hobbies/hobbies.component';
import { DetailWorkComponent } from './components/home/detail-work/detail-work.component';
import { MenuItemsWorkComponent } from './components/home/menu-items-work/menu-items-work.component';
import { MenuItemSkillsComponent } from './components/home/menu-item-skills/menu-item-skills.component';
import { DetailSkillsComponent } from './components/home/detail-skills/detail-skills.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    HomeComponent,
    FooterComponent,
    ContactComponent,
    ModalAppComponent,
    ModalAboutmeComponent,
    HobbiesComponent,
    DetailWorkComponent,
    MenuItemsWorkComponent,
    DetailSkillsComponent,
    MenuItemSkillsComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    FormsModule,
    HttpClientModule,
    MatToolbarModule,
    BrowserAnimationsModule
  ],
  providers: [
    /*Se define como proveedor la case data*/
    Data,
    DataHabilities
  ],
  bootstrap: [AppComponent],

})
export class AppModule { }
