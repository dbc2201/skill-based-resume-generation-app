import { Component } from '@angular/core';

@Component({
  selector: 'app-error-page',
  standalone: true,
  imports: [],
  templateUrl: './error-page.component.html',
  styleUrl: './error-page.component.css'
})
export class ErrorPageComponent {

}

const withMT = require("@material-tailwind/html/utils/withMT");

module.exports = withMT({
  content: ["error-page.component.html"],
  theme: {
    extend: {},
  },
  plugins: [],
});
