// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-model-style',
//   standalone: true,
//   imports: [],
//   templateUrl: './model-style.component.html',
//   styleUrl: './model-style.component.css'
// })
// export class ModelStyleComponent {

// }
document.getElementById('openModal').addEventListener('click', function() {
	document.getElementById('modal').style.display = 'block';
  });

  document.getElementById('closeModal').addEventListener('click', function() {
	document.getElementById('modal').style.display = 'none';
  });

  document.getElementById('cancelBtn').addEventListener('click', function() {
	document.getElementById('modal').style.display = 'none';
  });

  document.getElementById('viewDetailsBtn').addEventListener('click', function() {
	// Add your logic for "View Details" button here
  });
