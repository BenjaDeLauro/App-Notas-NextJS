export const categorias = [
  { nombre: 'Estudio', emoji: '📚', descripcion: 'Apuntes, exámenes y contenidos para repasar.', clase: 'estudio' },
  { nombre: 'Facultad', emoji: '🎓', descripcion: 'Trabajos prácticos y actividades de clase.', clase: 'facultad' },
  { nombre: 'Personal', emoji: '💡', descripcion: 'Ideas, recordatorios y proyectos propios.', clase: 'personal' },
];

export const notasIniciales = [
  { id: '1', titulo: 'Repasar Next.js', contenido: 'Estudiar el App Router, los layouts compartidos y las rutas dinámicas para Programación III.', categoria: 'Estudio', fecha: '2026-11-17' },
  { id: '2', titulo: 'Actividad de Programación III', contenido: 'Configurar una ruta nueva, una anidada y una dinámica. Personalizar el inicio, el nav y el footer.', categoria: 'Facultad', fecha: '2026-11-18' },
  { id: '3', titulo: 'Ideas para mi portafolio', contenido: 'Actualizar proyectos, mejorar la presentación y agregar capturas de las aplicaciones.', categoria: 'Personal', fecha: '2026-11-19' },
];
export function fechaLegible(fecha) {
  return new Date(`${fecha}T12:00:00`).toLocaleDateString('es-AR', { day: 'numeric', month: 'short', year: 'numeric' });
}
