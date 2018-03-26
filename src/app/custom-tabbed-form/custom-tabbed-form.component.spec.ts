import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomTabbedFormComponent } from './custom-tabbed-form.component';

describe('CustomTabbedFormComponent', () => {
  let component: CustomTabbedFormComponent;
  let fixture: ComponentFixture<CustomTabbedFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomTabbedFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomTabbedFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
