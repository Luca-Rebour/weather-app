import { Component, Output, EventEmitter } from '@angular/core';
import { CambiarLocalidadService } from '../cambiar-localidad.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-buscador',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './buscador.component.html',
  styleUrl: './buscador.component.css'
})
export class BuscadorComponent {

  @Output() eventoLocalidad = new EventEmitter<string>();
  localidad: string = '';
  constructor(private cambiarLocalidadService: CambiarLocalidadService) { }

  cambiarLocalidad() {
    this.cambiarLocalidadService.cambiarLocalidad(this.localidad);
    this.localidad = '';
  }
}
