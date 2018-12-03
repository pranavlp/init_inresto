import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MultipleCompaniesComponent } from './multiple-companies.component';

describe('MultipleCompaniesComponent', () => {
  let component: MultipleCompaniesComponent;
  let fixture: ComponentFixture<MultipleCompaniesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MultipleCompaniesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MultipleCompaniesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
