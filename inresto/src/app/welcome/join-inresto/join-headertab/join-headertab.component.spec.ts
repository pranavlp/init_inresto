import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JoinHeadertabComponent } from './join-headertab.component';

describe('JoinHeadertabComponent', () => {
  let component: JoinHeadertabComponent;
  let fixture: ComponentFixture<JoinHeadertabComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JoinHeadertabComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JoinHeadertabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
