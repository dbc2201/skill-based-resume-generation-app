import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {

}
angular.module('myApp', [])
  .controller('FooterController', ['$scope', function($scope) {
    $scope.navigateTo = function(page) {
      // Add logic here to navigate to respective pages
      console.log('Navigating to', page);
    };
  }]);
