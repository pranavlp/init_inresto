import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OutletSingleOutletComponent } from './outlet-single-outlet.component';

describe('OutletSingleOutletComponent', () => {
  let component: OutletSingleOutletComponent;
  let fixture: ComponentFixture<OutletSingleOutletComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OutletSingleOutletComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OutletSingleOutletComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
