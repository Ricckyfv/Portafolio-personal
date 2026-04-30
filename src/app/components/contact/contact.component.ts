import { Component } from '@angular/core';
// Importamos las herramientas para Formularios Reactivos
import { ReactiveFormsModule, FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [ReactiveFormsModule], // ¡Muy importante añadir esto aquí!
  templateUrl: './contact.component.html'
})
export class ContactComponent {
  contactForm: FormGroup;

  // Variables para controlar el estado del modal y del botón de envío
  showModal: boolean = false; // Para controlar la visibilidad del modal
  isSubmitting: boolean = false; // Para controlar el estado del botón de envío

  constructor(private fb: FormBuilder) {
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      subject: [''],
      message: ['', Validators.required]
    });
  }

  // Función asíncrona para esperar la respuesta de Formspree
  async onSubmit() {
    if (this.contactForm.valid) {
      this.isSubmitting = true;

      try {
        const response = await fetch('https://formspree.io/f/mqenzvak', {
          method: 'POST',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(this.contactForm.value)
        });

        // Si Formspree nos devuelve un OK (código 200)
        if (response.ok) {
          this.showModal = true;
          this.contactForm.reset();
        } else {
          console.error('Error al procesar el envío en el servidor.');
        }
      } catch (error) {
        console.error('Error de red de conexión:', error);
      } finally {
        this.isSubmitting = false;
      }
    } else {
      this.contactForm.markAllAsTouched();
    }
  }

  // Función para cerrar el modal
  closeModal() {
    this.showModal = false;
  }
}
