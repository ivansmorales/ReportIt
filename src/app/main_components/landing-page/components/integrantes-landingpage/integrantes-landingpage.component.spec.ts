import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IntegrantesLandingpageComponent } from './integrantes-landingpage.component';

describe('IntegrantesLandingpageComponent', () => {
  let component: IntegrantesLandingpageComponent;
  let fixture: ComponentFixture<IntegrantesLandingpageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IntegrantesLandingpageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IntegrantesLandingpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
