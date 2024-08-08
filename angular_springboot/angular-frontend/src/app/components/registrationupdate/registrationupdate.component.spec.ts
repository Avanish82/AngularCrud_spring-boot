import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrationupdateComponent } from './registrationupdate.component';

describe('RegistrationupdateComponent', () => {
  let component: RegistrationupdateComponent;
  let fixture: ComponentFixture<RegistrationupdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RegistrationupdateComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegistrationupdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
