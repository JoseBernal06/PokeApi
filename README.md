# Pokédex Ionic + Angular + Firebase

- Desarrollado por **Mateo Bernal**
- **Link del APK**


## Características principales

- **Listado de Pokémon:** Muestra una lista paginada de Pokémon obtenidos desde la PokeAPI.
- **Búsqueda:** Permite buscar Pokémon por nombre en tiempo real.
- **Detalles:** Visualiza detalles como tipos, habilidades y estadísticas de cada Pokémon.
- **Reseñas:** Permite escribir y guardar una reseña personalizada para cada Pokémon, almacenándola en Firestore (Firebase).
- **Scroll infinito:** Carga más Pokémon automáticamente al llegar al final de la lista.
- **Refrescar:** Botón para recargar la lista completa de Pokémon.
- **Diseño responsivo:** Interfaz amigable y adaptable a dispositivos móviles.


## Uso

- Utiliza la barra de búsqueda para encontrar Pokémon por nombre.
- Haz clic en "Ver detalles" para desplegar información adicional.
- Escribe una reseña y pulsa "Guardar reseña" para almacenarla en Firebase.
- Usa el botón "Refrescar" para recargar la lista.
- El scroll infinito permite cargar más Pokémon automáticamente.


## Estructura de Firestore

Las reseñas se guardan en la colección `busquedas` con los siguientes campos:
- `nombre`
- `tipo`
- `habilidades`
- `stats`
- `url de la imagen`
- `opinion`
- `fecha de creacion`

## Notas

- El proyecto está preparado para ser desplegado en web y dispositivos móviles (Android) usando Capacitor.

## Capturas de la app en dispositivo movil
- ![imagen](https://github.com/user-attachments/assets/8aedb010-d680-4624-aa38-dd5fa87e1a7a)
- ![imagen](https://github.com/user-attachments/assets/89ce3332-d28c-4529-acd4-6684401cc69f)
- ![imagen](https://github.com/user-attachments/assets/a93fa057-29d9-4fb4-a1f7-49eb28418b30)


