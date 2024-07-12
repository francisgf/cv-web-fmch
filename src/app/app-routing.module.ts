import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ContactComponent } from './components/contact/contact.component';
import { HobbiesComponent } from './components/hobbies/hobbies.component';

const routes: Routes = [
  { path: '', component:  HomeComponent},
  {path:'contact', component: ContactComponent},
  { path: 'home', component: HomeComponent },
  {path:'hobbies',component: HobbiesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
