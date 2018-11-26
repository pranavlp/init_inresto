import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubheadlerrightComponent } from './subheadlerright.component';

describe('SubheadlerrightComponent', () => {
  let component: SubheadlerrightComponent;
  let fixture: ComponentFixture<SubheadlerrightComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubheadlerrightComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubheadlerrightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
