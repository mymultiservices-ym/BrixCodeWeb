import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

interface Proyecto {
  title: string;
  description: string;
  technologies: string[];
  image: string;
}

@Component({
  selector: 'app-proyectos',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatChipsModule, MatButtonModule, MatIconModule],
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.scss']
})
export class ProyectosComponent {
  proyectos: Proyecto[] = [
    {
      title: 'Plataforma E-learning',
      description: 'Sistema de gestión educativa con videoconferencias y seguimiento académico.',
      technologies: ['Angular', 'Node.js', 'MongoDB', 'WebRTC'],
      image: '/assets/elearning.jpg'
    },
    {
      title: 'ERP para Retail',
      description: 'Sistema integral de gestión para cadena de tiendas con 50+ sucursales.',
      technologies: ['React', 'Python', 'PostgreSQL', 'Docker'],
      image: '/assets/erp.jpg'
    },
    {
      title: 'App de Delivery',
      description: 'Aplicación móvil para pedidos y seguimiento en tiempo real.',
      technologies: ['Flutter', 'Firebase', 'Node.js', 'Google Maps'],
      image: '/assets/delivery.jpg'
    },
    {
      title: 'Dashboard IoT',
      description: 'Plataforma de monitoreo industrial con análisis predictivo.',
      technologies: ['Vue.js', 'InfluxDB', 'MQTT', 'TensorFlow'],
      image: '/assets/iot.jpg'
    },
    {
      title: 'CRM Empresarial',
      description: 'Sistema de gestión de clientes con automatización de marketing.',
      technologies: ['Angular', 'NestJS', 'PostgreSQL', 'Redis'],
      image: '/assets/crm.jpg'
    },
    {
      title: 'App Fintech',
      description: 'Plataforma de gestión financiera con análisis en tiempo real.',
      technologies: ['React Native', 'Node.js', 'MongoDB', 'AWS'],
      image: '/assets/fintech.jpg'
    }
  ];
}