import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TableimageComponent } from './tableimage.component';

describe('TableimageComponent', () => {
  let component: TableimageComponent;
  let fixture: ComponentFixture<TableimageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TableimageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TableimageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
