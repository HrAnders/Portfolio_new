import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { LandingSectionComponent } from './landing-section/landing-section.component';
import { HeaderMobileComponent } from './header-mobile/header-mobile.component';
import { LandingSectionMobileComponent } from './landing-section-mobile/landing-section-mobile.component';
import { AboutMeSectionComponent } from './about-me-section/about-me-section.component';
import { AboutMeSectionMobileComponent } from './about-me-section-mobile/about-me-section-mobile.component';
import { SkillSectionComponent } from './skill-section/skill-section.component';
import { SkillSectionMobileComponent } from './skill-section-mobile/skill-section-mobile.component';
import { PortfolioSectionComponent } from './portfolio-section/portfolio-section.component';
import { PortfolioSectionMobileComponent } from './portfolio-section-mobile/portfolio-section-mobile.component';
import { ProjectDescriptionComponent } from './project-description/project-description.component';
import { ContactSectionComponent } from './contact-section/contact-section.component';
import { ContactSectionMobileComponent } from './contact-section-mobile/contact-section-mobile.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { ContactFormMobileComponent } from './contact-form-mobile/contact-form-mobile.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { OverlayMobileComponent } from './overlay-mobile/overlay-mobile.component';
import { FooterComponent } from './footer/footer.component';
import { FooterMobileComponent } from './footer-mobile/footer-mobile.component';
import { ImprintComponent } from './imprint/imprint.component';
import { MainComponent } from './main/main.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LandingSectionComponent,
    HeaderMobileComponent,
    LandingSectionMobileComponent,
    AboutMeSectionComponent,
    AboutMeSectionMobileComponent,
    SkillSectionComponent,
    SkillSectionMobileComponent,
    PortfolioSectionComponent,
    PortfolioSectionMobileComponent,
    ProjectDescriptionComponent,
    ContactSectionComponent,
    ContactSectionMobileComponent,
    ContactFormComponent,
    ContactFormMobileComponent,
    OverlayMobileComponent,
    FooterComponent,
    FooterMobileComponent,
    ImprintComponent,
    MainComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
