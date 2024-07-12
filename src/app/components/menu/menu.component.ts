import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {
  isContentVisible = false;
  isListOpen: boolean = false;

  isViewBtnMenu = true;
  isViewBtnMenuClose = false;
constructor(private router:Router ){

}
navigateHome(){
  this.router.navigate(['/home']);
  this.toggleList(); 
}
navigateContact(){
  this.router.navigate(['/contact']);
  this.toggleList(); 
}

navigateHobbies(){
  this.router.navigate(['/hobbies']);
  this.toggleList(); 
}

navigateBlog(){
  /*window.location.href = 'http://localhost/miblog/'*/
  window.open('http://localhost/miblog', '_blank');
  this.toggleList();
}



toggleList() {
  this.isListOpen = !this.isListOpen;
  this.isContentVisible = !this.isContentVisible;
  this.isViewBtnMenu = !this.isViewBtnMenu ;
  this.isViewBtnMenuClose = !this.isViewBtnMenuClose ;
}

}


