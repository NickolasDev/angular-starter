import {NgModule} from '@angular/core';
import {NavbarComponent} from './navbar/navbar.component';
import {CoreModule} from '../../../core/core.module';

@NgModule({
  imports: [
    CoreModule,
  ],
  declarations: [NavbarComponent],
  exports: [NavbarComponent]
})
export class ComponentModule {
}
