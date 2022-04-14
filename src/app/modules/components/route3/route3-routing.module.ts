import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Route3Component } from './route3.component';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: Route3Component,
        data: { title: 'Route-3' },
      },
    ]),
  ],
  exports: [RouterModule],
})
export class Route3RoutingModule {}
