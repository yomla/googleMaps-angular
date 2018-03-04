import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AgmCoreModule } from '@agm/core';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyA0PiIUXSpFOF9_ZrEn2T8CLapJWOhBI3U'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
