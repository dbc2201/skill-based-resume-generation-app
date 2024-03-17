import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModeelFormComponent } from './modeel-form.component';

describe('ModeelFormComponent', () => {
  let component: ModeelFormComponent;
  let fixture: ComponentFixture<ModeelFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModeelFormComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ModeelFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
