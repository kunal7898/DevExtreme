import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TabedDataGridComponent } from './tabed-data-grid.component';

describe('TabedDataGridComponent', () => {
  let component: TabedDataGridComponent;
  let fixture: ComponentFixture<TabedDataGridComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TabedDataGridComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TabedDataGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
