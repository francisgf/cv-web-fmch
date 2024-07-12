import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuItemSkillsComponent } from './menu-item-skills.component';

describe('MenuItemSkillsComponent', () => {
  let component: MenuItemSkillsComponent;
  let fixture: ComponentFixture<MenuItemSkillsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MenuItemSkillsComponent]
    });
    fixture = TestBed.createComponent(MenuItemSkillsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
