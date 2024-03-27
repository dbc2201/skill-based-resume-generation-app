import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterFormComponent } from './footer-form.component';

describe('FooterFormComponent', () => {
  let component: FooterFormComponent;
  let fixture: ComponentFixture<FooterFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FooterFormComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FooterFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
