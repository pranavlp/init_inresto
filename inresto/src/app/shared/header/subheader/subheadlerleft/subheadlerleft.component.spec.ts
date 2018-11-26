import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubheadlerleftComponent } from './subheadlerleft.component';

describe('SubheadlerleftComponent', () => {
  let component: SubheadlerleftComponent;
  let fixture: ComponentFixture<SubheadlerleftComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubheadlerleftComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubheadlerleftComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
