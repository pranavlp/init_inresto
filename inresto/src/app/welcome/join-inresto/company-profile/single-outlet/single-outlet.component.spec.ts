import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleOutletComponent } from './single-outlet.component';

describe('SingleOutletComponent', () => {
  let component: SingleOutletComponent;
  let fixture: ComponentFixture<SingleOutletComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SingleOutletComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleOutletComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
