import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { categorias } from '@/lib/seed';
export const metadata = { title: 'Categorías | Mis Notas' };
export default function CategoriasPage() {
  return <main className="shell page"><span className="section-kicker">TODO ORGANIZADO</span><h1 className="page-title">Categorías</h1><p className="page-subtitle">Elegí una categoría para explorar sus notas.</p><div className="category-grid">{categorias.map(c => <Link key={c.nombre} className={`category-card ${c.clase}`} href={`/notas/categorias/${c.clase}`}><span className="category-emoji">{c.emoji}</span><h2>{c.nombre}</h2><p>{c.descripcion}</p><span className="category-link">Ver notas <ArrowRight size={17}/></span></Link>)}</div></main>;
}
