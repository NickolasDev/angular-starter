import {RouterModule, Routes} from '@angular/router';
import {ModuleWithProviders} from '@angular/compiler/src/core';
import {MainLayoutComponent} from './shared/ui/layout/main-layout/main-layout.component';

export const routes: Routes = [
  {
    path: '',
    component: MainLayoutComponent,
    data: {pageTitle: 'Home'},
    children: [
      {
        path: '', redirectTo: 'home', pathMatch: 'full',
      },
      {
        path: 'home',
        loadChildren: './feature/home/home.module#HomeModule',
        data: {pageTitle: 'Home'}
      }
    ]
  },
  {
    path: '**',
    redirectTo: 'home'
  }
];

export const AppRouting: ModuleWithProviders = RouterModule.forRoot(routes, {useHash: false});
