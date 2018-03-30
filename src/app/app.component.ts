import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'cognizant';
  name='Sanjay';
  num1=10;
  num2=20;

  displayDate=function(){
   return new Date();
  }
}
