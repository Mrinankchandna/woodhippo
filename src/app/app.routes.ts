import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home';
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
        loadComponent: () => import('./pages/placeholder/placeholder').then(m => m.PlaceholderComponent),
        data: { title: 'About Us' }
      }
    ]
  },
  {
    path: 'services',
    component: ResizableNavbarComponent,
    children: [
      {
        path: '',
        loadComponent: () => import('./pages/placeholder/placeholder').then(m => m.PlaceholderComponent),
        data: { title: 'Our Services' }
      }
    ]
  },
  {
    path: 'sectors',
    component: ResizableNavbarComponent,
    children: [
      {
        path: '',
        loadComponent: () => import('./pages/placeholder/placeholder').then(m => m.PlaceholderComponent),
        data: { title: 'Sectors We Serve' }
      }
    ]
  },
  {
    path: 'careers',
    component: ResizableNavbarComponent,
    children: [
      {
        path: '',
        loadComponent: () => import('./pages/placeholder/placeholder').then(m => m.PlaceholderComponent),
        data: { title: 'Careers' }
      }
    ]
  },
  {
    path: 'csr',
    component: ResizableNavbarComponent,
    children: [
      {
        path: '',
        loadComponent: () => import('./pages/placeholder/placeholder').then(m => m.PlaceholderComponent),
        data: { title: 'Corporate Social Responsibility' }
      }
    ]
  },
  {
    path: 'media',
    component: ResizableNavbarComponent,
    children: [
      {
        path: '',
        loadComponent: () => import('./pages/placeholder/placeholder').then(m => m.PlaceholderComponent),
        data: { title: 'Media' }
      }
    ]
  },
  {
    path: 'contact-us',
    component: ResizableNavbarComponent,
    children: [
      {
        path: '',
        loadComponent: () => import('./pages/placeholder/placeholder').then(m => m.PlaceholderComponent),
        data: { title: 'Contact Us' }
      }
    ]
  },
  {
    path: '**',
    redirectTo: ''
  }
];