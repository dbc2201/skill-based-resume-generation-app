import { Component } from '@angular/core';
import { ManualFormComponent } from '../manual-form/manual-form.component';
import { AssessmentFormComponent } from '../assessment-form/assessment-form.component';

@Component({
  selector: 'app-skills-form',
  standalone: true,
  imports: [ManualFormComponent,AssessmentFormComponent],
  templateUrl: './skills-form.component.html',
  styleUrl: './skills-form.component.css'
})
export class SkillsFormComponent {

}
