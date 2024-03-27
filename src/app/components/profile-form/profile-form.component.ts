import { Component } from '@angular/core';
import { DemoFormComponent } from "../demo-form/demo-form.component";
import { PButtonFormComponent } from "../p-button-form/p-button-form.component";
import { FooterFormComponent } from "../footer-form/footer-form.component";

@Component({
    selector: 'app-profile-form',
    standalone: true,
    templateUrl: './profile-form.component.html',
    styleUrl: './profile-form.component.css',
    imports: [DemoFormComponent, PButtonFormComponent, FooterFormComponent]
})
export class ProfileFormComponent {

}
