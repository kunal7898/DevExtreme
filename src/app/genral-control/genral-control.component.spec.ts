import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GenralControlComponent } from './genral-control.component';

describe('GenralControlComponent', () => {
  let component: GenralControlComponent;
  let fixture: ComponentFixture<GenralControlComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GenralControlComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GenralControlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
