import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

interface Servicio {
  icon: string;
  title: string;
  description: string;
  features: string[];
}

@Component({
  selector: 'app-servicios',
  standalone: true,
  imports: [CommonModule, RouterLink, MatCardModule, MatButtonModule, MatIconModule],
  templateUrl: './servicios.component.html',
  styleUrls: ['./servicios.component.scss']
})
export class ServiciosComponent {
  servicios: Servicio[] = [
    {
      icon: 'code',
      title: 'Software a Medida',
      description: 'Desarrollamos soluciones personalizadas que se adaptan exactamente a tus necesidades.',
      features: ['Arquitectura escalable', 'Código limpio y documentado', 'Mejores prácticas']
    },
    {
      icon: 'web',
      title: 'Aplicaciones Web',
      description: 'Plataformas web modernas, rápidas y responsivas con las últimas tecnologías.',
      features: ['Angular/React/Vue', 'Diseño responsive', 'Alto rendimiento']
    },
    {
      icon: 'phone_android',
      title: 'Apps Móviles',
      description: 'Aplicaciones nativas y multiplataforma para iOS y Android.',
      features: ['Flutter/React Native', 'Experiencia de usuario', 'Offline-first']
    },
    {
      icon: 'cloud_queue',
      title: 'Cloud & DevOps',
      description: 'Infraestructura en la nube y automatización de despliegues.',
      features: ['AWS/Azure/GCP', 'CI/CD', 'Escalado automático']
    },
    {
      icon: 'analytics',
      title: 'Consultoría IT',
      description: 'Asesoramiento estratégico para transformación digital.',
      features: ['Arquitectura de sistemas', 'Optimización de costos', 'Seguridad']
    },
    {
      icon: 'support_agent',
      title: 'Soporte 24/7',
      description: 'Mantenimiento continuo y soporte técnico especializado.',
      features: ['Monitoreo constante', 'Respuesta rápida', 'Actualizaciones']
    }
  ];
}