import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderoptionsComponent } from './headeroptions.component';

describe('HeaderoptionsComponent', () => {
  let component: HeaderoptionsComponent;
  let fixture: ComponentFixture<HeaderoptionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeaderoptionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderoptionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
