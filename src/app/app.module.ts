import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule ,Routes }from "@angular/router";
import{RemotecallService}from "./remotecall.service";

import { AppComponent } from './app.component';
import { App1componentComponent } from './app1component/app1component.component';
import { ProductsComponent } from './shop/products/products.component';
import { CatalogComponent } from './shop/catalog/catalog.component';
import { TodoComponent } from './task/todo/todo.component';
import { FormsModule } from '@angular/forms';
import { ApiComponent } from './http/api/api.component'

@NgModule({
  declarations: [
    AppComponent,
    App1componentComponent,
    ProductsComponent,
    CatalogComponent,
    TodoComponent,
    ApiComponent,
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
      {
        path:"catalog",
        component:CatalogComponent
      },
      {
        path:"products",
        component:ProductsComponent
      },
      {
        path:"todo",
        component:TodoComponent
      },
      {
        path:"remote",
        component:ApiComponent
        
      }
    ]),
  ],
  providers: [RemotecallService],
  bootstrap: [AppComponent]
})
export class AppModule { }
