import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Route6Component } from './route6.component';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: Route6Component,
        data: { title: 'Route-6' },
      },
    ]),
  ],
  exports: [RouterModule],
})
export class Route6RoutingModule {}
