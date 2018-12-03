import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JoinLeftnavigationComponent } from './join-leftnavigation.component';

describe('JoinLeftnavigationComponent', () => {
  let component: JoinLeftnavigationComponent;
  let fixture: ComponentFixture<JoinLeftnavigationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JoinLeftnavigationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JoinLeftnavigationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
