import {NgModule} from '@angular/core';
import {LayoutModule} from './layout/layout.module';
import {ComponentModule} from './component/component.module';

@NgModule({
  exports: [LayoutModule, ComponentModule]
})
export class UiModule {
}
