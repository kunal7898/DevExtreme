import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CascadinglookupsComponent } from './cascadinglookups.component';

describe('CascadinglookupsComponent', () => {
  let component: CascadinglookupsComponent;
  let fixture: ComponentFixture<CascadinglookupsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CascadinglookupsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CascadinglookupsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
