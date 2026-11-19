'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { ArrowLeft, Pencil, Trash2, CalendarDays } from 'lucide-react';
import { useNotes } from '@/context/NotesContext';
import { fechaLegible } from '@/lib/seed';
import NoteForm from './NoteForm';

export default function NoteDetail({ id }) {
  const { notas, cargado, eliminarNota } = useNotes();
  const [editando, setEditando] = useState(false);
  const router = useRouter();
  const nota = notas.find(n => n.id === id);
  if (!cargado) return <p className="muted">Cargando nota...</p>;
  if (!nota) return <div className="empty"><h2>Esta nota no existe</h2><p>Es posible que haya sido eliminada o que la URL sea incorrecta.</p><Link href="/notas" className="button">Volver a mis notas</Link></div>;
  function borrar() {
    if (window.confirm('¿Seguro que querés eliminar esta nota?')) { eliminarNota(id); router.push('/notas'); }
  }
  return <>
    <Link className="back-link" href="/notas"><ArrowLeft size={17}/> Volver a mis notas</Link>
    {editando ? <><h1 className="page-title">Editar nota</h1><NoteForm nota={nota}/><button type="button" onClick={() => setEditando(false)} className="text-action">Cancelar edición</button></> :
      <article className="detail-card"><span className={`pill ${nota.categoria.toLowerCase()}`}>{nota.categoria}</span><h1>{nota.titulo}</h1><div className="note-date"><CalendarDays size={16}/>{fechaLegible(nota.fecha)}</div><div className="detail-body">{nota.contenido}</div><div className="detail-actions"><button type="button" className="button" onClick={() => setEditando(true)}><Pencil size={17}/> Editar nota</button><button type="button" className="button button-danger" onClick={borrar}><Trash2 size={17}/> Eliminar</button></div></article>}
  </>;
}
