import { Component } from '@angular/core';

// Definimos la estructura de un Proyecto
export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  link: string;
}

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [],
  templateUrl: './projects.component.html',
})
export class ProjectsComponent {

  // Lista dinámica de proyectos
  projects: Project[] = [
    {
      id: 1,
      title: 'Finance Tracker',
      description: 'Aplicación web para gestionar finanzas personales, con gráficos interactivos y seguimiento de gastos.',
      image: '/img-projects/finance-tracker.png',
      technologies: ['Angular', 'Spring Boot', 'Tailwind CSS', 'Chart.js', 'MySQL'],
      link: 'https://finance-tracker-frontend-tau-brown.vercel.app/'
    },
    {
      id: 2,
      title: 'Gestion de usuarios',
      description: 'Sistema de gestión de usuarios.',
      image: '/img-projects/gestion-usuarios.png',
      technologies: ['HTML', 'Spring Boot', 'MySQL'],
      link: 'https://gestion-de-usuarios-production-d7d9.up.railway.app'
    },
    {
      id: 3,
      title: 'BeatHub Store',
      description: 'E-commerce de venta de auriculares, ofreciendo una experiencia fluida y atractiva para los amantes de la música.',
      image: '/img-projects/beathub-store.png',
      technologies: ['JavaScript', 'HTML', 'CSS', 'Stripe'],
      link: 'https://ricckyfv.github.io/BeatHubStore/'
    },
    {
      id: 5,
      title: 'Dulce Encanto',
      description: 'Diseño y desarrollo de una página web para una pastelería local, con catálogo de productos.',
      image: '/img-projects/dulce-encanto.png',
      technologies: ['HTML', 'CSS'],
      link: 'https://ricckyfv.github.io/Dulce-Encanto/'
    },
    {
      id: 5,
      title: 'BlackJack Game',
      description: 'Juego interactivo de BlackJack para principiantes.',
      image: '/img-projects/blackjack-game.png',
      technologies: ['Vite', 'JavaScript', 'HTML', 'CSS'],
      link: 'https://ricckyfv.github.io/MyBlackjackVite/'
    }
  ];

}
