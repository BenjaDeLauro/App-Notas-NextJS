import Link from 'next/link';
import { ArrowUpRight, CalendarDays } from 'lucide-react';
import { fechaLegible } from '@/lib/seed';

export default function NoteCard({ nota }) {
  return <article className="note-card">
    <div className="note-card-top"><span className={`pill ${nota.categoria.toLowerCase()}`}>{nota.categoria}</span><Link href={`/notas/${nota.id}`} aria-label={`Ver ${nota.titulo}`}><ArrowUpRight size={20}/></Link></div>
    <h3><Link href={`/notas/${nota.id}`}>{nota.titulo}</Link></h3>
    <p>{nota.contenido}</p>
    <div className="note-date"><CalendarDays size={15}/>{fechaLegible(nota.fecha)}</div>
  </article>;
}
