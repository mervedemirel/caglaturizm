import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {HomepageComponent} from './pages/homepage/homepage.component';
import {CompanyComponent} from './pages/company/company.component';
import {ServicesComponent} from './pages/services/services.component';
import {ReferencesComponent} from './pages/references/references.component';
import {CareerComponent} from './pages/career/career.component';
import {ContactComponent} from './pages/contact/contact.component';


const routes: Routes = [
  {
    path: '',
    component: HomepageComponent
  },
  {
    path: 'kurumsal',
    component: CompanyComponent,
    // data: {
    //   seo: {
    //     title: 'Kurumsal | Özcandan Seyahat',
    //     description: 'lorem ipsum dolor sit amet'
    //   }
    // }
  },
  {
    path: 'hizmetlerimiz',
    component: ServicesComponent
  },
  {
    path: 'referanslarimiz',
    component: ReferencesComponent
  },
  {
    path: 'kariyer',
    component: CareerComponent
  },
  {
    path: 'iletisim',
    component: ContactComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
