import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import NoteForm from '@/components/NoteForm';
export const metadata = { title: 'Nueva nota | Mis Notas' };
export default function NuevaNotaPage() {
  return <main className="shell page page-narrow"><Link href="/notas" className="back-link"><ArrowLeft size={17}/> Volver a mis notas</Link><span className="section-kicker">EMPEZÁ A ESCRIBIR</span><h1 className="page-title">Nueva nota</h1><p className="page-subtitle">Guardá tus ideas importantes para volver a ellas después.</p><NoteForm/></main>;
}
