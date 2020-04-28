import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormRegisteruserComponent } from './form-registeruser.component';

describe('FormRegisteruserComponent', () => {
  let component: FormRegisteruserComponent;
  let fixture: ComponentFixture<FormRegisteruserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormRegisteruserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormRegisteruserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
