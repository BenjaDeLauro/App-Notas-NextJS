import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import NotesList from '@/components/NotesList';
import { categorias } from '@/lib/seed';
import { notFound } from 'next/navigation';

export function generateStaticParams() { return categorias.map(c => ({ categoria: c.clase })); }
export default async function CategoriaPage({ params }) {
  const { categoria } = await params;
  const actual = categorias.find(c => c.clase === categoria);
  if (!actual) notFound();
  return <main className="shell page"><Link className="back-link" href="/notas/categorias"><ArrowLeft size={17}/> Todas las categorías</Link><span className="section-kicker">{actual.emoji} {actual.nombre.toUpperCase()}</span><h1 className="page-title">Notas de {actual.nombre}</h1><p className="page-subtitle">{actual.descripcion}</p><NotesList categoriaInicial={actual.nombre}/></main>;
}
