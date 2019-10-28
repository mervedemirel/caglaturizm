import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/shared/header/header.component';
import { HeroComponent } from './components/pages/homepage/hero/hero.component';
import { ButtonComponent } from './components/shared/button/button.component';
import { OsHakkindaComponent } from './components/pages/homepage/os-hakkinda/os-hakkinda.component';
import { ParallaxComponent } from './components/pages/homepage/parallax/parallax.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { CompanyComponent } from './pages/company/company.component';
import { ContactComponent } from './pages/contact/contact.component';
import { CareerComponent } from './pages/career/career.component';
import { ServicesComponent } from './pages/services/services.component';
import { BannerComponent } from './components/shared/banner/banner.component';
import { BadgeComponent } from './components/shared/banner/badge/badge.component';
import { CategoriesComponent } from './components/shared/categories/categories.component';
import { VisionComponent } from './components/pages/company/vision/vision.component';
import { CertificatesComponent } from './components/pages/company/certificates/certificates.component';
import { ServiceComponent } from './components/pages/services/service/service.component';
import { ReferencesComponent } from './pages/references/references.component';
import { CareerTopFormComponent } from './components/pages/career/career-top-form/career-top-form.component';
import { CareerBotFormComponent } from './components/pages/career/career-bot-form/career-bot-form.component';
import { BranchesComponent } from './components/pages/contact/branches/branches.component';
import { ContactFormComponent } from './components/pages/contact/contact-form/contact-form.component';
import {HttpClientModule} from '@angular/common/http';
import {ReactiveFormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HeroComponent,
    ButtonComponent,
    OsHakkindaComponent,
    ParallaxComponent,
    FooterComponent,
    HomepageComponent,
    CompanyComponent,
    ContactComponent,
    CareerComponent,
    ServicesComponent,
    BannerComponent,
    BadgeComponent,
    CategoriesComponent,
    VisionComponent,
    CertificatesComponent,
    ServiceComponent,
    ReferencesComponent,
    CareerTopFormComponent,
    CareerBotFormComponent,
    BranchesComponent,
    ContactFormComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
