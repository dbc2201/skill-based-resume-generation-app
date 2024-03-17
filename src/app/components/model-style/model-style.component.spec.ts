import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModelStyleComponent } from './model-style.component';

describe('ModelStyleComponent', () => {
  let component: ModelStyleComponent;
  let fixture: ComponentFixture<ModelStyleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModelStyleComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ModelStyleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
