import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManualFormComponent } from './manual-form.component';

describe('ManualFormComponent', () => {
  let component: ManualFormComponent;
  let fixture: ComponentFixture<ManualFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ManualFormComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ManualFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
