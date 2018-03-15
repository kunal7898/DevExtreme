import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomGridDatasourceComponent } from './custom-grid-datasource.component';

describe('CustomGridDatasourceComponent', () => {
  let component: CustomGridDatasourceComponent;
  let fixture: ComponentFixture<CustomGridDatasourceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomGridDatasourceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomGridDatasourceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
