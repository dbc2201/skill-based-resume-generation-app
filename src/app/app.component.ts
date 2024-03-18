import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ContactFormComponent } from './components/contact-form/contact-form.component';
import { SkillsFormComponent } from './components/skills-form/skills-form.component';
import { FooterFormComponent } from "./components/footer-form/footer-form.component";
import { AlertFormComponent } from "./components/alert-form/alert-form.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, ContactFormComponent, SkillsFormComponent, NavbarComponent, FooterFormComponent, AlertFormComponent]
})
export class AppComponent {
  title = 'skill-based-resume-generation-app';
}
