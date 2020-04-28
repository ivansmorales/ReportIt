import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoLandingPageComponent } from './info-landing-page.component';

describe('InfoLandingPageComponent', () => {
  let component: InfoLandingPageComponent;
  let fixture: ComponentFixture<InfoLandingPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InfoLandingPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InfoLandingPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
