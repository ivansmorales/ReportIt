import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CarouselLandingpageComponent } from './carousel-landingpage.component';

describe('CarouselLandingpageComponent', () => {
  let component: CarouselLandingpageComponent;
  let fixture: ComponentFixture<CarouselLandingpageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarouselLandingpageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarouselLandingpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
