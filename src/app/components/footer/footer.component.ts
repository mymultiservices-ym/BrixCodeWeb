import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, RouterLink, MatIconModule],
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  currentYear = new Date().getFullYear();
  
  quickLinks = [
    { path: '/', label: 'Inicio' },
    { path: '/servicios', label: 'Servicios' },
    { path: '/proyectos', label: 'Proyectos' },
    { path: '/nosotros', label: 'Nosotros' },
    { path: '/tecnologias', label: 'Tecnologías' },
    { path: '/contacto', label: 'Contacto' }
  ];

  socialLinks = [
    { icon: 'facebook', url: 'https://facebook.com', label: 'Facebook' },
    { icon: 'twitter', url: 'https://twitter.com', label: 'Twitter' },
    { icon: 'linkedin', url: 'https://linkedin.com', label: 'LinkedIn' },
    { icon: 'github', url: 'https://github.com', label: 'GitHub' }
  ];
}