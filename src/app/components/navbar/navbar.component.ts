import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink,RouterOutlet],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
	sections = [
		{ name: 'Home', link: '/home' },
		{ name: 'Experience', link: '/experience' },
		{ name: 'Skills', link: '/skills' },
		{ name: 'Education', link: '/education' },
		{ name: 'Projects', link: '/projects' },
		{ name: 'Contact', link: '/contact' }
	  ];
	  openNav: boolean = false;
	  isDropdownOpen: boolean = false;

  toggleDropdown() {
    this.isDropdownOpen = !this.isDropdownOpen;
  }


}
