# nota. — App de Notas con Next.js

**Autor:** Benjamín De Lauro  
**Materia:** Programación III — ITEC Río Cuarto

Aplicación de notas creada con **Next.js (App Router)**, **React** y CSS. Permite crear, buscar, ver, editar, eliminar y organizar notas por categorías. Los datos se guardan con `localStorage` en el navegador, por lo que no hace falta configurar una base de datos.

## Cómo ejecutarla

Necesitás **Node.js 20.9 o superior**.

```bash
npm install
npm run dev
```

Abrí http://localhost:3000. Para comprobar el build de producción:

```bash
npm run build
npm run start
```

## Rutas

| Ruta | Tipo | Descripción |
| --- | --- | --- |
| `/` | Raíz | Inicio personalizado |
| `/notas` | Nueva | Listado, buscador y filtros |
| `/notas/nueva` | Anidada | Crear una nota |
| `/notas/categorias` | Anidada | Todas las categorías |
| `/notas/categorias/estudio` | Dinámica anidada | Notas filtradas por categoría |
| `/notas/[id]` | Dinámica | Ver, editar o eliminar una nota por ID |
| `/acerca` | Nueva | Información del proyecto y su autor |

La navegación interna utiliza `Link` de `next/link`. `app/layout.js` contiene el encabezado con menú compartido y el footer personalizado. `app/page.js` es el inicio. Las rutas dinámicas leen `params` desde la URL.

## Requisitos cumplidos

- [x] Nueva ruta (`/acerca` y `/notas`)
- [x] Ruta anidada (`/notas/categorias`)
- [x] Ruta dinámica (`/notas/[id]`)
- [x] Uso de `Link` en la navegación interna
- [x] `layout.js` personalizado: navbar y footer con autor
- [x] `page.js` personalizado: home propio
- [x] Código listo para publicar en GitHub

## Consideraciones

Las notas son **locales a cada navegador/dispositivo**. Al limpiar los datos del sitio se pierden. Las tres notas de ejemplo aparecen solo cuando el navegador todavía no tiene datos guardados. No existe un backend ni inicio de sesión en esta versión.
