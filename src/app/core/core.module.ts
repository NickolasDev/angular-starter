import {LOCALE_ID, ModuleWithProviders, NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MaterialModule} from './material/material.module';
import {LayoutModule} from '@angular/cdk/layout';
import {RouterModule} from '@angular/router';


@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    CommonModule,
    LayoutModule,
  ],
  exports: [
    CommonModule,
    MaterialModule,
    CommonModule,
    LayoutModule,
    RouterModule
  ],
  providers: [
    {
      provide: LOCALE_ID,
      useValue: 'pt'
    }
  ]
})
export class CoreModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: CoreModule
    };
  }
}
