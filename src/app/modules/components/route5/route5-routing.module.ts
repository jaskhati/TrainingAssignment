import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Route5Component } from './route5.component';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: Route5Component,
        data: { title: 'Route-5' },
      },
    ]),
  ],
  exports: [RouterModule],
})
export class Route5RoutingModule {}
