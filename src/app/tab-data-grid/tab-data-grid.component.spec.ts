import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TabDataGridComponent } from './tab-data-grid.component';

describe('TabDataGridComponent', () => {
  let component: TabDataGridComponent;
  let fixture: ComponentFixture<TabDataGridComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TabDataGridComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TabDataGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
