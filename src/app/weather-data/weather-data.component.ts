import { Component } from '@angular/core';
import { WeatherService } from '../weather.service';
import { WeatherIconService } from '../weather-icon.service';
import { DecimalPipe, NgIf } from '@angular/common';
import { switchMap } from 'rxjs/operators';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser'; // Paso 1
import { CambiarLocalidadService } from '../cambiar-localidad.service';
@Component({
  selector: 'app-weather-data',
  standalone: true,
  imports: [DecimalPipe, NgIf],
  templateUrl: './weather-data.component.html',
  styleUrls: ['./weather-data.component.css'],
})
export class WeatherDataComponent {
  constructor(
    private weatherService: WeatherService,
    private weatherIconService: WeatherIconService,
    private sanitizer: DomSanitizer,
    private cambiarLocalidadService: CambiarLocalidadService
  ) {
    this.cambiarLocalidadService.localidad.subscribe((localidad: string) => {
      this.localidad = localidad;
      this.darValores(); // Actualiza los valores cada vez que la localidad cambia
    });
  }

  temp: number = 0;
  nubes: number = 0;
  presion: number = 0;
  humedad: number = 0;
  ciudad: string = '';
  clima: string = '';
  icono: SafeUrl | null = null; // Actualiza el tipo a SafeUrl | null
  viento?: any;
  localidad: string = 'Buenos Aires';


  manejarEventoLocalidad(localidad: any) {
    // Implementa lo que necesites hacer con la localidad aquí
    console.log(localidad);
  }

  ngOnInit() {
    this.darValores();
  }

  darValores() {
    this.weatherService
      .getFromUserSelection(this.localidad)
      .pipe(
        switchMap((data: any) => {
          this.nubes = data.clouds.all;
          this.temp = this.kelvinACelsius(data.main.temp);
          this.presion = data.main.pressure;
          this.humedad = data.main.humidity;
          this.ciudad = data.name;
          this.viento = data.wind.speed;
          this.clima = data.weather[0].icon;

          console.log(data);
          console.log(this.clima);

          return this.weatherIconService.getIcon(this.clima);
        })
      )
      .subscribe((iconData: any) => {
        // Paso 3: Convierte el blob o la URL en una URL segura
        this.icono = this.sanitizer.bypassSecurityTrustUrl(
          URL.createObjectURL(iconData)
        );

        console.log(this.icono);
      });
  }

  kelvinACelsius(kelvin: number) {
    return kelvin - 273.15;
  }
}
