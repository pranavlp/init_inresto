import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OutletAddCompanyComponent } from './outlet-add-company.component';

describe('OutletAddCompanyComponent', () => {
  let component: OutletAddCompanyComponent;
  let fixture: ComponentFixture<OutletAddCompanyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OutletAddCompanyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OutletAddCompanyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
