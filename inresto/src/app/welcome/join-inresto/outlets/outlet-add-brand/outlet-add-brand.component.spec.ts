import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OutletAddBrandComponent } from './outlet-add-brand.component';

describe('OutletAddBrandComponent', () => {
  let component: OutletAddBrandComponent;
  let fixture: ComponentFixture<OutletAddBrandComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OutletAddBrandComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OutletAddBrandComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
