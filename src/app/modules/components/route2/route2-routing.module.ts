import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Route2Component } from './route2.component';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: Route2Component,
        data: { title: 'Route-2' },
      },
    ]),
  ],
  exports: [RouterModule],
})
export class Route2RoutingModule {}
