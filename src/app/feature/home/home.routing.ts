import {Routes, RouterModule} from '@angular/router';
import {ModuleWithProviders} from '@angular/core';
import {HomeComponent} from './home.component';

export const homeRoutes: Routes = [
  {
    path: '',
    component: HomeComponent,
    data: {
      pageTitle: 'Home'
    }
  }
];

export const HomeRouting: ModuleWithProviders = RouterModule.forChild(homeRoutes);
