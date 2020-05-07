import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GraphsAdminComponent } from './graphs-admin.component';

describe('GraphsAdminComponent', () => {
  let component: GraphsAdminComponent;
  let fixture: ComponentFixture<GraphsAdminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GraphsAdminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GraphsAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
