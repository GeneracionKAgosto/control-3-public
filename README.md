# Control 3

En este control se implementará un cuadro de búsqueda de películas que acceda
a The Movie Database, busque la película que el usuario ha intruducido y vuelque
los resultados en un listado.

-   La documentación de la API está aquí: https://developers.themoviedb.org/3
-   La API Key que usaremos para acceder a la API será este:
    `486d343f9b5ccc40cd5650b69fc70c5e`

## Requisitos

![Mockup](https://i.imgur.com/8vELiqd.png)

### Typescript

Tendremos que usar Typescript para este miniproyecto, pero me pueden preguntar
si tienen demasiados problemas con los tipos.

### Estructura de la MiniApp

Dentro de `src` hay tres directorios vacíos.

-   **`controllers`**: Este directorio contiene lógica de la aplicación. No
    debería tener que dibujar cosas al DOM

-   **`tmdb-client`**: Será una clase que sólo debe consultar la API de
    The Movie Database.

-   **`utils`**: Utilidades que no sepan donde meter pero que se reutilizan. Ojo
    con no meter muchas cosas aquí!

-   **`views`**: Será una clase cuyo único propósito es dibujar datos en el DOM.
    Esta clase no hace falta testearla

Tienen un ejemplo parecido en [este repositorio](https://github.com/GeneracionKAgosto/ejemplo-controlador-vista).

### Visualización de los datos

Le pueden dar estilos a la lista de películas o al formulario, pero lo más
importante en este ejercicio es la parte de Javascript.

En este listado, lo ideal sería mostrar el título, la valoración y el póster.

## Valoración

Deben dejar la aplicación lo mejor que puedan. Se valorarán:

-   Tests
-   Documentación
-   Estructuración del código (dividido en varios ficheros)
-   Legibilidad y limpieza
-   Buen uso de TypeScript
-   Buen uso de Programación Orientada a Objetos, encapsulación, etc...
-   Buen uso de la Programación Funcional, inmutabilidad, pureza...

Opcionalmente si terminan la parte de las películas pueden ampliarlo para que
permita buscar series.
