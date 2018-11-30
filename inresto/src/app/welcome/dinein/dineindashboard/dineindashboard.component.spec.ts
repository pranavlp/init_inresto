import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DineindashboardComponent } from './dineindashboard.component';

describe('DineindashboardComponent', () => {
  let component: DineindashboardComponent;
  let fixture: ComponentFixture<DineindashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DineindashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DineindashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
