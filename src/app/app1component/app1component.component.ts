import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-app1component',
  templateUrl: './app1component.component.html',
  styleUrls: ['./app1component.component.css']
})
export class App1componentComponent implements OnInit {

  name="Subcomponent";
  constructor() { }

  ngOnInit() {
  }
  

}
