import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PButtonFormComponent } from './p-button-form.component';

describe('PButtonFormComponent', () => {
  let component: PButtonFormComponent;
  let fixture: ComponentFixture<PButtonFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PButtonFormComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PButtonFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
