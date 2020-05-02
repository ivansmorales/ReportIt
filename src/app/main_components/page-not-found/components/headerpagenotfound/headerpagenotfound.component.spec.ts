import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderpagenotfoundComponent } from './headerpagenotfound.component';

describe('HeaderpagenotfoundComponent', () => {
  let component: HeaderpagenotfoundComponent;
  let fixture: ComponentFixture<HeaderpagenotfoundComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeaderpagenotfoundComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderpagenotfoundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
