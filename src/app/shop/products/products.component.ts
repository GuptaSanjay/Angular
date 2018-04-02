import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  products=["shoe","Snacks","Diamond","Dress","mobile"]
  constructor() { }

  ngOnInit() {
  }
  giftime=function(counter){
    alert("buy me this !!!"+this.products[counter])
  }
  addtask=function(){
    console.log("Adding task");
  }

}
