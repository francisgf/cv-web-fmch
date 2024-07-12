import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailSkillsComponent } from './detail-skills.component';

describe('DetailSkillsComponent', () => {
  let component: DetailSkillsComponent;
  let fixture: ComponentFixture<DetailSkillsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DetailSkillsComponent]
    });
    fixture = TestBed.createComponent(DetailSkillsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
