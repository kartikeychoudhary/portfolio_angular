import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { HeaderComponent } from './modules/header/header.component';
import { HomeSectionComponent } from './modules/home-section/home-section.component';
import { AboutSectionComponent } from './modules/about-section/about-section.component';
import { SkillsSectionComponent } from './modules/skills-section/skills-section.component';
import { QualificationsSectionComponent } from './modules/qualifications-section/qualifications-section.component';
import { ServicesSectionComponent } from './modules/services-section/services-section.component';
import { PortfolioSectionComponent } from './modules/portfolio-section/portfolio-section.component';
import Swiper from 'swiper';
import { SwiperModule } from 'swiper/angular';
import { ContactSectionComponent } from './modules/contact-section/contact-section.component';
import { FooterSectionComponent } from './modules/footer-section/footer-section.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    HomeSectionComponent,
    AboutSectionComponent,
    SkillsSectionComponent,
    QualificationsSectionComponent,
    ServicesSectionComponent,
    PortfolioSectionComponent,
    ContactSectionComponent,
    FooterSectionComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SwiperModule,
    ReactiveFormsModule,
    HttpClientModule
    // Swiper
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
