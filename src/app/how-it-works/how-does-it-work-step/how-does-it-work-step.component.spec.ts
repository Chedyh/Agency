import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HowDoesItWorkStepComponent } from './how-does-it-work-step.component';

describe('HowDoesItWorkStepComponent', () => {
  let component: HowDoesItWorkStepComponent;
  let fixture: ComponentFixture<HowDoesItWorkStepComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HowDoesItWorkStepComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HowDoesItWorkStepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
