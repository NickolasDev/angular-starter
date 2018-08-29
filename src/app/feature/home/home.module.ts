import {NgModule} from '@angular/core';
import {HomeComponent} from './home.component';
import {HomeRouting} from './home.routing';
import {CoreModule} from '../../core/core.module';

@NgModule({
  imports: [
    CoreModule,
    HomeRouting
  ],
  declarations: [HomeComponent]
})
export class HomeModule {
}
