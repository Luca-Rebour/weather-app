# WeatherApp

# Que hacer para que funcione?
Una vez clonado el repositorio, introducir en la consola de comandos "npm install" para instalar las dependencias necesarias de Angular
Luego, para que la aplicacion se comunique con la api, se debe obtener una api key en "https://openweathermap.org" e insertarla dentro de un archivo "enviroment.ts" en app/enviroments. 
Ej: export const environment = {
  production: false,
  apiKey: 'TU API KEY',
  apiUrl: 'https://api.openweathermap.org/data/2.5/weather?q='
};

# Ejecutar aplicacion
Una vez realizados los pasos especificados anteriormente, ejecutar el comando "ng serve" en la consola de comandos para poder utilizar la app
