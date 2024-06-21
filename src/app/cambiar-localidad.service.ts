import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CambiarLocalidadService {
  private localidadSource = new BehaviorSubject<string>('Buenos Aires');
  localidad = this.localidadSource.asObservable();

  constructor(){
  }

  cambiarLocalidad(localidad: string) {
    this.localidadSource.next(localidad);
  }
}