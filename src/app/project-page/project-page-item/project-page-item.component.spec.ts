import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectPageItemComponent } from './project-page-item.component';

describe('ProjectPageItemComponent', () => {
  let component: ProjectPageItemComponent;
  let fixture: ComponentFixture<ProjectPageItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjectPageItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectPageItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
