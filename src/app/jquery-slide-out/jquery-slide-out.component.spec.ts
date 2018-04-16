import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JquerySlideOutComponent } from './jquery-slide-out.component';

describe('JquerySlideOutComponent', () => {
  let component: JquerySlideOutComponent;
  let fixture: ComponentFixture<JquerySlideOutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JquerySlideOutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JquerySlideOutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
