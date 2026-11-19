'use client';

import { useMemo, useState } from 'react';
import Link from 'next/link';
import { Search, NotebookPen } from 'lucide-react';
import { useNotes } from '@/context/NotesContext';
import NoteCard from './NoteCard';
import { categorias } from '@/lib/seed';

export default function NotesList({ categoriaInicial = 'Todas' }) {
  const { notas, cargado } = useNotes();
  const [busqueda, setBusqueda] = useState('');
  const [categoria, setCategoria] = useState(categoriaInicial);
  const filtradas = useMemo(() => notas.filter(nota =>
    (categoria === 'Todas' || nota.categoria === categoria) &&
    `${nota.titulo} ${nota.contenido}`.toLocaleLowerCase('es').includes(busqueda.toLocaleLowerCase('es'))
  ), [notas, categoria, busqueda]);
  return <>
    <div className="filters">
      <label className="searchbox"><Search size={19}/><span className="sr-only">Buscar notas</span><input value={busqueda} onChange={e => setBusqueda(e.target.value)} placeholder="Buscar por título o contenido..." /></label>
      <div className="chips" aria-label="Filtrar notas por categoría">{['Todas', ...categorias.map(c => c.nombre)].map(c => <button key={c} type="button" onClick={() => setCategoria(c)} className={`chip ${categoria === c ? 'selected' : ''}`} aria-pressed={categoria === c}>{c}</button>)}</div>
    </div>
    {!cargado ? <p className="muted">Cargando tus notas...</p> : filtradas.length ? <div className="notes-grid">{filtradas.map(nota => <NoteCard key={nota.id} nota={nota}/>)}</div> : <div className="empty"><NotebookPen size={35}/><h3>No encontramos notas</h3><p>Probá con otra búsqueda o creá una nota nueva.</p><Link href="/notas/nueva" className="button">Crear una nota</Link></div>}
  </>;
}
