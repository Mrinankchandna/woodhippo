import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ResizableNavbarComponent } from './components/resizable-navbar/resizable-navbar.component';

export const routes: Routes = [
  {
    path: '',
    component: ResizableNavbarComponent,
    children: [
      {
        path: '',
        component: HomeComponent
      }
    ]
  },
  {
    path: 'about-us',
    component: ResizableNavbarComponent,
    children: [
      {
        path: '',
        loadComponent: () => import('./pages/about/about.component').then(m => m.AboutComponent)
      }
    ]
  },
  {
    path: 'services',
    component: ResizableNavbarComponent,
    children: [
      {
        path: '',
        loadComponent: () => import('./pages/services/services.component').then(m => m.ServicesComponent)
      }
    ]
  },
  {
    path: 'business',
    component: ResizableNavbarComponent,
    children: [
      {
        path: '',
        loadComponent: () => import('./pages/business/business.component').then(m => m.BusinessComponent)
      }
    ]
  },
  
  {
    path: 'how-it-works',
    component: ResizableNavbarComponent,
    children: [
      {
        path: '',
        loadComponent: () => import('./pages/how-it-works/how-it-works.component').then(m => m.HowItWorksComponent)
      }
    ]
  },
  {
    path: 'contact-us',
    component: ResizableNavbarComponent,
    children: [
      {
        path: '',
        loadComponent: () => import('./pages/contact-us/contact-us.component').then(m => m.ContactUsComponent)
      }
    ]
  },

  {
    path: '**',
    redirectTo: ''
  }
];
