import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatBottomSheet, MatBottomSheetModule } from '@angular/material/bottom-sheet';
import { MobileMenuComponent } from '../mobile-menu/mobile-menu.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    CommonModule, 
    RouterLink, 
    RouterLinkActive,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatBottomSheetModule
  ],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  constructor(private bottomSheet: MatBottomSheet) {}

  menuItems = [
    { path: '/', label: 'Inicio', icon: 'home' },
    { path: '/servicios', label: 'Servicios', icon: 'design_services' },
    { path: '/proyectos', label: 'Proyectos', icon: 'folder' },
    { path: '/nosotros', label: 'Nosotros', icon: 'group' },
    { path: '/tecnologias', label: 'Tecnologías', icon: 'code' },
    { path: '/contacto', label: 'Contacto', icon: 'contact_mail' }
  ];

  openMobileMenu(): void {
    this.bottomSheet.open(MobileMenuComponent, {
      panelClass: 'mobile-bottom-sheet'
    });
  }
}