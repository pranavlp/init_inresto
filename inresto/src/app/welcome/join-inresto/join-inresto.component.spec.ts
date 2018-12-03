import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JoinInrestoComponent } from './join-inresto.component';

describe('JoinInrestoComponent', () => {
  let component: JoinInrestoComponent;
  let fixture: ComponentFixture<JoinInrestoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JoinInrestoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JoinInrestoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
