'use client';

import { createContext, useCallback, useContext, useEffect, useState } from 'react';
import { notasIniciales } from '@/lib/seed';

const NotesContext = createContext(null);
const STORAGE_KEY = 'benja_notas_nextjs_v1';

export function NotesProvider({ children }) {
  const [notas, setNotas] = useState(notasIniciales);
  const [cargado, setCargado] = useState(false);

  useEffect(() => {
    try {
      const guardadas = localStorage.getItem(STORAGE_KEY);
      if (guardadas !== null) {
        const parsed = JSON.parse(guardadas);
        if (Array.isArray(parsed)) setNotas(parsed);
      }
    } catch (error) { console.error('No se pudieron leer las notas guardadas:', error); }
    setCargado(true);
  }, []);

  useEffect(() => {
    if (cargado) localStorage.setItem(STORAGE_KEY, JSON.stringify(notas));
  }, [notas, cargado]);

  const agregarNota = useCallback((datos) => {
    const id = crypto.randomUUID();
    setNotas(actuales => [{ ...datos, id, fecha: new Date().toISOString().slice(0, 10) }, ...actuales]);
    return id;
  }, []);

  const eliminarNota = useCallback((id) => setNotas(actuales => actuales.filter(nota => nota.id !== id)), []);
  const editarNota = useCallback((id, datos) => setNotas(actuales => actuales.map(nota => nota.id === id ? { ...nota, ...datos } : nota)), []);

  return <NotesContext.Provider value={{ notas, cargado, agregarNota, eliminarNota, editarNota }}>{children}</NotesContext.Provider>;
}

export function useNotes() {
  const context = useContext(NotesContext);
  if (!context) throw new Error('useNotes debe usarse dentro de NotesProvider');
  return context;
}
