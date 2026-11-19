'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useNotes } from '@/context/NotesContext';
import { categorias } from '@/lib/seed';

export default function NoteForm({ nota = null }) {
  const router = useRouter();
  const { agregarNota, editarNota } = useNotes();
  const [titulo, setTitulo] = useState(nota?.titulo ?? '');
  const [contenido, setContenido] = useState(nota?.contenido ?? '');
  const [categoria, setCategoria] = useState(nota?.categoria ?? 'Estudio');
  const [error, setError] = useState('');

  function guardar(e) {
    e.preventDefault();
    if (!titulo.trim() || !contenido.trim()) return setError('Completá el título y el contenido.');
    const datos = { titulo: titulo.trim(), contenido: contenido.trim(), categoria };
    if (nota) { editarNota(nota.id, datos); router.push(`/notas/${nota.id}`); }
    else { const id = agregarNota(datos); router.push(`/notas/${id}`); }
  }

  return <form className="note-form" onSubmit={guardar}>
    <div className="field"><label htmlFor="titulo">Título de la nota</label><input id="titulo" maxLength={90} value={titulo} onChange={e => setTitulo(e.target.value)} placeholder="Ej.: Repasar para el parcial" required /></div>
    <div className="field"><label htmlFor="categoria">Categoría</label><select id="categoria" value={categoria} onChange={e => setCategoria(e.target.value)}>{categorias.map(c => <option key={c.nombre} value={c.nombre}>{c.nombre}</option>)}</select></div>
    <div className="field"><label htmlFor="contenido">Contenido</label><textarea id="contenido" rows={9} value={contenido} onChange={e => setContenido(e.target.value)} placeholder="Escribí todo lo que quieras recordar..." required /></div>
    {error && <p role="alert" className="form-error">{error}</p>}
    <div className="form-actions"><Link className="button button-ghost" href={nota ? `/notas/${nota.id}` : '/notas'}>Cancelar</Link><button type="submit" className="button">{nota ? 'Guardar cambios' : 'Guardar nota'}</button></div>
  </form>;
}
