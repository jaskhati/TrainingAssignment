import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Route4Component } from './route4.component';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: Route4Component,
        data: { title: 'Route-4' },
      },
    ]),
  ],
  exports: [RouterModule],
})
export class Route4RoutingModule {}
