import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthApiService } from './api.component';

describe('ApiComponent', () => {
  let component: AuthApiService;
  let fixture: ComponentFixture<AuthApiService>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AuthApiService ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AuthApiService);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
