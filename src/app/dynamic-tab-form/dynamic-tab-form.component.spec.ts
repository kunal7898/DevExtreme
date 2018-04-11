import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicTabFormComponent } from './dynamic-tab-form.component';

describe('DynamicTabFormComponent', () => {
  let component: DynamicTabFormComponent;
  let fixture: ComponentFixture<DynamicTabFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DynamicTabFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DynamicTabFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
