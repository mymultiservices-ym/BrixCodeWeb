import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { RouterLink } from '@angular/router';

interface Technology {
  name: string;
  icon: string;
}

interface TechCategory {
  name: string;
  icon: string;
  technologies: Technology[];
}

@Component({
  selector: 'app-tecnologias',
  standalone: true,
  imports: [CommonModule, MatIconModule, MatButtonModule, RouterLink],
  templateUrl: './tecnologias.component.html',
  styleUrls: ['./tecnologias.component.scss']
})
export class TecnologiasComponent {
  categories: TechCategory[] = [
    {
      name: 'Frontend',
      icon: 'web',
      technologies: [
        { name: 'Angular', icon: 'angular' },
        { name: 'React', icon: 'react' },
        { name: 'Vue.js', icon: 'vue' },
        { name: 'TypeScript', icon: 'code' },
        { name: 'HTML5/CSS3', icon: 'html' },
        { name: 'Tailwind', icon: 'palette' }
      ]
    },
    {
      name: 'Backend',
      icon: 'storage',
      technologies: [
        { name: 'Node.js', icon: 'node' },
        { name: 'Python', icon: 'python' },
        { name: 'Java', icon: 'java' },
        { name: 'PHP', icon: 'php' },
        { name: 'Go', icon: 'bolt' },
        { name: '.NET', icon: 'windows' }
      ]
    },
    {
      name: 'Bases de Datos',
      icon: 'database',
      technologies: [
        { name: 'PostgreSQL', icon: 'postgres' },
        { name: 'MongoDB', icon: 'leaf' },
        { name: 'MySQL', icon: 'mysql' },
        { name: 'Redis', icon: 'speed' },
        { name: 'Firebase', icon: 'firebase' },
        { name: 'DynamoDB', icon: 'cloud' }
      ]
    },
    {
      name: 'DevOps & Cloud',
      icon: 'cloud',
      technologies: [
        { name: 'Docker', icon: 'docker' },
        { name: 'Kubernetes', icon: 'k8s' },
        { name: 'AWS', icon: 'aws' },
        { name: 'Azure', icon: 'azure' },
        { name: 'Jenkins', icon: 'build' },
        { name: 'GitHub Actions', icon: 'github' }
      ]
    },
    {
      name: 'Mobile',
      icon: 'phone_android',
      technologies: [
        { name: 'Flutter', icon: 'flutter' },
        { name: 'React Native', icon: 'react' },
        { name: 'Swift', icon: 'apple' },
        { name: 'Kotlin', icon: 'android' },
        { name: 'Ionic', icon: 'ionic' },
        { name: 'Xamarin', icon: 'microsoft' }
      ]
    }
  ];
}