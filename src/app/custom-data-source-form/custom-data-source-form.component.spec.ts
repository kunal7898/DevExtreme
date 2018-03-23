import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomDataSourceFormComponent } from './custom-data-source-form.component';

describe('CustomDataSourceFormComponent', () => {
  let component: CustomDataSourceFormComponent;
  let fixture: ComponentFixture<CustomDataSourceFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomDataSourceFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomDataSourceFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
