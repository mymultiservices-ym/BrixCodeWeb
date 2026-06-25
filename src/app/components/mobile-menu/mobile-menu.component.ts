import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { MatBottomSheetRef } from '@angular/material/bottom-sheet';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-mobile-menu',
  standalone: true,
  imports: [
    CommonModule, 
    RouterLink, 
    RouterLinkActive, 
    MatIconModule, 
    MatListModule,
    MatButtonModule
  ],
  templateUrl: './mobile-menu.component.html',
  styleUrls: ['./mobile-menu.component.scss']
})
export class MobileMenuComponent {
  public bottomSheetRef = inject(MatBottomSheetRef<MobileMenuComponent>);

  menuItems = [
    { path: '/', label: 'Inicio', icon: 'home' },
    { path: '/servicios', label: 'Servicios', icon: 'design_services' },
    { path: '/proyectos', label: 'Proyectos', icon: 'folder' },
    { path: '/nosotros', label: 'Nosotros', icon: 'group' },
    { path: '/tecnologias', label: 'Tecnologías', icon: 'code' },
    { path: '/contacto', label: 'Contacto', icon: 'contact_mail' }
  ];

  navigateTo(path: string): void {
    this.bottomSheetRef.dismiss();
  }
}