import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderRegisterLogInUserComponent } from './header-register-log-in-user.component';

describe('HeaderRegisterLogInUserComponent', () => {
  let component: HeaderRegisterLogInUserComponent;
  let fixture: ComponentFixture<HeaderRegisterLogInUserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeaderRegisterLogInUserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderRegisterLogInUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
