import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderrightComponent } from './headerright.component';

describe('HeaderrightComponent', () => {
  let component: HeaderrightComponent;
  let fixture: ComponentFixture<HeaderrightComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeaderrightComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderrightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
