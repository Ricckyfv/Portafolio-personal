import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterModule } from '@angular/router';

@Component({
  selector: 'app-navbar',
  imports: [RouterLink, CommonModule, RouterModule],
  templateUrl: './navbar.component.html'
})
export class NavbarComponent {
  // Variable para controlar el estado del menú
  isMobileMenuOpen: boolean = false;

  // Función para alternar entre abierto y cerrado
  toggleMenu() {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
  }

  // Función para cerrar el menú al hacer clic en un enlace
  closeMenu() {
    this.isMobileMenuOpen = false;
  }
}
