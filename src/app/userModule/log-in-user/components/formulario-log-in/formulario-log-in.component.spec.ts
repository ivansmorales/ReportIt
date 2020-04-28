import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioLogInComponent } from './formulario-log-in.component';

describe('FormularioLogInComponent', () => {
  let component: FormularioLogInComponent;
  let fixture: ComponentFixture<FormularioLogInComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormularioLogInComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormularioLogInComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
