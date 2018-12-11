import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DineinfiltersComponent } from './dineinfilters.component';

describe('DineinfiltersComponent', () => {
  let component: DineinfiltersComponent;
  let fixture: ComponentFixture<DineinfiltersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DineinfiltersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DineinfiltersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
