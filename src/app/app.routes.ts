import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./pages/home/home.component').then(m => m.HomeComponent)
  },
  {
    path: 'servicios',
    loadComponent: () => import('./pages/servicios/servicios.component').then(m => m.ServiciosComponent)
  },
  {
    path: 'proyectos',
    loadComponent: () => import('./pages/proyectos/proyectos.component').then(m => m.ProyectosComponent)
  },
  {
    path: 'nosotros',
    loadComponent: () => import('./pages/nosotros/nosotros.component').then(m => m.NosotrosComponent)
  },
  {
    path: 'tecnologias',
    loadComponent: () => import('./pages/tecnologias/tecnologias.component').then(m => m.TecnologiasComponent)
  },
  {
    path: 'contacto',
    loadComponent: () => import('./pages/contact/contact.component').then(m => m.ContactComponent)
  },
  {
    path: '**',
    redirectTo: ''
  }
];