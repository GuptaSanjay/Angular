import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  tasklist=["go to market","reack home early"];
  sometask="";
  constructor() { }

  ngOnInit() {
  }
  addtask=function(){
    console.log("Adding task"+this.sometask)
    this.tasklist.push(this.sometask)
    console.log(this.tasklist)
    this.sometask="";
  }
  deletetask=function(ct){
    this.tasklist.splice(ct,1);
  }
}
