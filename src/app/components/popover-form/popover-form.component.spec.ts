import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopoverFormComponent } from './popover-form.component';

describe('PopoverFormComponent', () => {
  let component: PopoverFormComponent;
  let fixture: ComponentFixture<PopoverFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PopoverFormComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PopoverFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
