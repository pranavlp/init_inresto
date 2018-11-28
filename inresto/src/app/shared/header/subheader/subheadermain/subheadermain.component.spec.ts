import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubheadermainComponent } from './subheadermain.component';

describe('SubheadermainComponent', () => {
  let component: SubheadermainComponent;
  let fixture: ComponentFixture<SubheadermainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubheadermainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubheadermainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
