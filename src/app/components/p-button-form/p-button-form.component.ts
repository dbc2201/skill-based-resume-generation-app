import { Component } from '@angular/core';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-p-button-form',
  standalone: true,
  imports: [RouterLink,RouterOutlet],
  templateUrl: './p-button-form.component.html',
  styleUrl: './p-button-form.component.css'
})
export class PButtonFormComponent {

}
