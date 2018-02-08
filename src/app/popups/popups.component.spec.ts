import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA,ElementRef  } from '@angular/core';
import { PopupsComponent } from './popups.component';
import { DevExtremeModule } from '../../../DevExtreme/node_modules/devextreme-angular';

describe('PopupsComponent', () => {
  let component: PopupsComponent;
  let fixture: ComponentFixture<PopupsComponent>;
  
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PopupsComponent ],
      schemas:[NO_ERRORS_SCHEMA],
      
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PopupsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
