import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactoLangingpageComponent } from './contacto-langingpage.component';

describe('ContactoLangingpageComponent', () => {
  let component: ContactoLangingpageComponent;
  let fixture: ComponentFixture<ContactoLangingpageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContactoLangingpageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactoLangingpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
