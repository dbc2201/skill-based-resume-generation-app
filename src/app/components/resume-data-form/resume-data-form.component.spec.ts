import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResumeDataFormComponent } from './resume-data-form.component';

describe('ResumeDataFormComponent', () => {
  let component: ResumeDataFormComponent;
  let fixture: ComponentFixture<ResumeDataFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ResumeDataFormComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ResumeDataFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
