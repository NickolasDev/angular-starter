import {NgModule} from '@angular/core';
import {CoreModule} from './core/core.module';
import {SharedModule} from './shared/shared.module';
import {AppComponent} from './app.component';
import {AppRouting} from './app-routing.module';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CoreModule,
    SharedModule,
    AppRouting
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
