import Link from 'next/link';
import { Plus } from 'lucide-react';
import NotesList from '@/components/NotesList';
export const metadata = { title: 'Mis notas | Benjamín De Lauro' };
export default function NotasPage() {
  return <main className="shell page"><div className="page-head"><div><span className="section-kicker">MI ORGANIZADOR</span><h1 className="page-title">Mis notas</h1><p className="page-subtitle">Encontrá lo que necesitás, cuando lo necesitás.</p></div><Link href="/notas/nueva" className="button"><Plus size={18}/> Nueva nota</Link></div><NotesList/></main>;
}
