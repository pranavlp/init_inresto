import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MultipleOutletComponent } from './multiple-outlet.component';

describe('MultipleOutletComponent', () => {
  let component: MultipleOutletComponent;
  let fixture: ComponentFixture<MultipleOutletComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MultipleOutletComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MultipleOutletComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
