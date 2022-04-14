import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'route1',
    pathMatch: 'full',
  },

  {
    path: 'route1',
    loadChildren: () =>
      import('./modules/components/route1/route1.module').then(
        (m) => m.Route1Module
      ),
  },

  {
    path: 'route2',
    loadChildren: () =>
      import('./modules/components/route2/route2.module').then(
        (m) => m.Route2Module
      ),
  },

  {
    path: 'route3',
    loadChildren: () =>
      import('./modules/components/route3/route3.module').then(
        (m) => m.Route3Module
      ),
  },

  {
    path: 'route4',
    loadChildren: () =>
      import('./modules/components/route4/route4.module').then(
        (m) => m.Route4Module
      ),
  },

  {
    path: 'route5',
    loadChildren: () =>
      import('./modules/components/route5/route5.module').then(
        (m) => m.Route5Module
      ),
  },

  {
    path: 'route6',
    loadChildren: () =>
      import('./modules/components/route6/route6.module').then(
        (m) => m.Route6Module
      ),
  },

  {
    path: '*',
    redirectTo: 'route1',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
