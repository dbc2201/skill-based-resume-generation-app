import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatationFormComponent } from './updatation-form.component';

describe('UpdatationFormComponent', () => {
  let component: UpdatationFormComponent;
  let fixture: ComponentFixture<UpdatationFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UpdatationFormComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UpdatationFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
