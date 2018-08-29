import {NgModule} from '@angular/core';
import {CoreModule} from '../core/core.module';
import {UiModule} from './ui/ui.module';

@NgModule({
  imports: [
    CoreModule
  ],
  declarations: [],
  exports: [UiModule]
})
export class SharedModule {
}
