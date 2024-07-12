import { TestBed } from '@angular/core/testing';

import { ServiceAcviteComponentsService } from './service-acvite-components.service';

describe('ServiceAcviteComponentsService', () => {
  let service: ServiceAcviteComponentsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiceAcviteComponentsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
