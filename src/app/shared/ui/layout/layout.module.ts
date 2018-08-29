import {NgModule} from '@angular/core';
import {CoreModule} from '../../../core/core.module';
import { MainLayoutComponent } from './main-layout/main-layout.component';
import { HomeLayoutComponent } from './home-layout/home-layout.component';
import {ComponentModule} from '../component/component.module';

@NgModule({
  imports: [CoreModule, ComponentModule],
  declarations: [MainLayoutComponent, HomeLayoutComponent],
  exports: [MainLayoutComponent, HomeLayoutComponent]
})
export class LayoutModule {
}
