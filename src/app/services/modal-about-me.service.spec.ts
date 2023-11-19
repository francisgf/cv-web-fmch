import { TestBed } from '@angular/core/testing';

import { ModalAboutMeService } from './modal-about-me.service';

describe('ModalAboutMeService', () => {
  let service: ModalAboutMeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ModalAboutMeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
