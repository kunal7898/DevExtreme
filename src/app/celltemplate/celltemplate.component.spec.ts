import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CelltemplateComponent } from './celltemplate.component';

describe('CelltemplateComponent', () => {
  let component: CelltemplateComponent;
  let fixture: ComponentFixture<CelltemplateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CelltemplateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CelltemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
