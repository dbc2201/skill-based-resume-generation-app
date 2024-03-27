import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-sign-form',
  standalone: true,
  imports: [RouterLink,RouterOutlet],
  templateUrl: './sign-form.component.html',
  styleUrl: './sign-form.component.css'
})
export class SignFormComponent {

}
