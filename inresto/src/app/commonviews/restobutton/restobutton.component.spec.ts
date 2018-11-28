import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RestobuttonComponent } from './restobutton.component';

describe('RestobuttonComponent', () => {
  let component: RestobuttonComponent;
  let fixture: ComponentFixture<RestobuttonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RestobuttonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RestobuttonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
