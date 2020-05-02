import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterLoginRegisterComponent } from './footer-login-register.component';

describe('FooterLoginRegisterComponent', () => {
  let component: FooterLoginRegisterComponent;
  let fixture: ComponentFixture<FooterLoginRegisterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FooterLoginRegisterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FooterLoginRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
