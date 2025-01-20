import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoteableProjectsComponent } from './noteable-projects.component';

describe('NoteableProjectsComponent', () => {
  let component: NoteableProjectsComponent;
  let fixture: ComponentFixture<NoteableProjectsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NoteableProjectsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NoteableProjectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
