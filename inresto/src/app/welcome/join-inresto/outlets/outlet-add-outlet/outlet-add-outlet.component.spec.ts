import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OutletAddOutletComponent } from './outlet-add-outlet.component';

describe('OutletAddOutletComponent', () => {
  let component: OutletAddOutletComponent;
  let fixture: ComponentFixture<OutletAddOutletComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OutletAddOutletComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OutletAddOutletComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
