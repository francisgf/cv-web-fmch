import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalAppComponent } from './modal-app.component';

describe('ModalAppComponent', () => {
  let component: ModalAppComponent;
  let fixture: ComponentFixture<ModalAppComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ModalAppComponent]
    });
    fixture = TestBed.createComponent(ModalAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
