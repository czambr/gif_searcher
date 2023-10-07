# GIF Searcher

Esta es una aplicación de práctica en la que se puede buscar GIFs usando la API de GIPHY.

## Tabla de Contenido

-   [Prueba la App](#prueba-la-app)
-   [Configuraciones previas](#configurar-variables-de-ambiente)
-   [Instalación de módulo](#instalación-de-módulos)

### Prueba la App

Puedes probar la App Searcher Gif haciendo click [aqui](https://searcher-gif.netlify.app/). ¡Espero
la disfrutes!

### Configurar Variables de Ambiente

En el repositorio, usted cuenta con el archivo **.env.example**. Este fichero contiene el nombre de
las variables de ambiente.

Usted deberá renombrar este fichero **.env.example** con el nombre **.env** y luego llenar las
variables de entorno con sus respectivos valores.

```
VITE_API_KEY_GIPHY= <your-API-KEY>
```

En este caso, debe obtener las credenciales de `GIPHY` para que pueda realizar las peticiones
correspondientes.

**Nota**: Te dejo el enlace de la API que he usado para realizar las peticiones
[Search Endpoint](https://developers.giphy.com/docs/api/endpoint#search).

### Instalación de Módulos

Una vez configurado el ahora archivo `.env` con los valores correspondientes, se procede a la
instalación de las dependencias mostradas en el **package.json**.

```
npm install
```

Corra la pruebas ejecutando:

```
npm run dev
```
