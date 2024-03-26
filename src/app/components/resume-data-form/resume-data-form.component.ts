import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-resume-data-form',
  standalone: true,
  imports: [],
  templateUrl: './resume-data-form.component.html',
  styleUrl: './resume-data-form.component.css'
})
export class ResumeDataFormComponent {
	linkInput: string = '';

	addLink() {
	  // Add your link-adding logic here
	  console.log('Added link: ' + this.linkInput);
	}

submitForm() {
throw new Error('Method not implemented.');
}
	personalDetails: FormGroup | any;
onSubmit: any;
email: any;

  constructor(private formBuilder: FormBuilder) {
    this.personalDetails = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      city: ['', Validators.required],
      state: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      jobTitle: [''],
      phone: ['',[Validators.required]],
      address: [''],
      zipCode: ['',[Validators.required]],
      country: [''],
    });
  }

}


