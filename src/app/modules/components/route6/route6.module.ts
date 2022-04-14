import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Route6Component } from './route6.component';
import { Route6RoutingModule } from './route6-routing.module';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';

@NgModule({
  declarations: [Route6Component],
  imports: [CommonModule, Route6RoutingModule, InfiniteScrollModule],
})
export class Route6Module {}
