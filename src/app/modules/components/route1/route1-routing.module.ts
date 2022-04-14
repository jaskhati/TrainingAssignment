import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Route1Component } from './route1.component';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: "",
        component: Route1Component,
        data: { title: 'Route-1' }
      }
    ])
  ], 
  exports: [
    RouterModule
  ]
})
export class Route1RoutingModule { }