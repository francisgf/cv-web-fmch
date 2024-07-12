import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuItemsWorkComponent } from './menu-items-work.component';

describe('MenuItemsWorkComponent', () => {
  let component: MenuItemsWorkComponent;
  let fixture: ComponentFixture<MenuItemsWorkComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MenuItemsWorkComponent]
    });
    fixture = TestBed.createComponent(MenuItemsWorkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
