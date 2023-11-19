import { TestBed } from '@angular/core/testing';

import { ModalAppService } from './modal-app.service';

describe('ModalAppService', () => {
  let service: ModalAppService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ModalAppService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
