import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginleftComponent } from './loginleft.component';

describe('LoginleftComponent', () => {
  let component: LoginleftComponent;
  let fixture: ComponentFixture<LoginleftComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginleftComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginleftComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
