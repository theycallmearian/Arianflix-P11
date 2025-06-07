# Arianflix

**Arianflix** es una aplicación de React que emula el estilo de Netflix para buscar y visualizar películas usando la API de OMDb.

## Características

- React Hooks: useState, useEffect, useRef
- React Router para navegación entre páginas
- Diseño “Netflix‐style”: fondo oscuro, acentos rojos, tarjetas con overlay
- Placeholder animado en el buscador (efecto máquina de escribir)
- Categorías predefinidas: Top Valoradas, Top Comedia, Top Acción
- Responsive para móviles y tablets

## Instalación

1. Clona el repositorio
2. Crea un archivo `.env` en la raíz con tu clave OMDb:
   ```
   REACT_APP_OMDB_API_KEY=TU_API_KEY
   ```
3. Instala dependencias:
   ```bash
   npm install
   ```
4. Inicia la aplicación:
   ```bash
   npm start
   ```

## Estructura de carpetas

```
src/
├── api/
│   └── api.js       Lógica de llamadas a la API de OMDb
├── assets/
│   └── styles/      Todos los CSS
├── components/
│   ├── common/      Navbar, Card, Loader
│   └── pages/       Home, Detail, About
├── components/routes/
│   └── AppRouter.jsx
├── index.js         Punto de entrada
└── reportWebVitals.js
```

## Uso

- Escribe en el buscador o espera las sugerencias animadas.
- Haz clic en una tarjeta para ver el detalle de la película.
- Usa el menú superior para volver al inicio o ir a “Acerca de”.

---

Hecho con cariño y paciencia por **Àrian Casstro**
