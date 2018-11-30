import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DineinreservwalkinComponent } from './dineinreservwalkin.component';

describe('DineinreservwalkinComponent', () => {
  let component: DineinreservwalkinComponent;
  let fixture: ComponentFixture<DineinreservwalkinComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DineinreservwalkinComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DineinreservwalkinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
