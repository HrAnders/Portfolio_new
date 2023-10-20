import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { LandingSectionComponent } from './landing-section/landing-section.component';
import { HeaderMobileComponent } from './header-mobile/header-mobile.component';
import { LandingSectionMobileComponent } from './landing-section-mobile/landing-section-mobile.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LandingSectionComponent,
    HeaderMobileComponent,
    LandingSectionMobileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
