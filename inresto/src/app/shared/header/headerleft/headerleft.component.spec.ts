import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderleftComponent } from './headerleft.component';

describe('HeaderleftComponent', () => {
  let component: HeaderleftComponent;
  let fixture: ComponentFixture<HeaderleftComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeaderleftComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderleftComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
