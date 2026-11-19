import Link from 'next/link';
import { BookOpen, Github, Heart } from 'lucide-react';
import { NotesProvider } from '@/context/NotesContext';
import './globals.css';

export const metadata = {
  title: 'Mis Notas | Benjamín De Lauro',
  description: 'Aplicación de notas desarrollada con Next.js para Programación III',
};

const enlaces = [
  { href: '/', texto: 'Inicio' },
  { href: '/notas', texto: 'Mis notas' },
  { href: '/notas/categorias', texto: 'Categorías' },
  { href: '/acerca', texto: 'Acerca de' },
];

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>
        <NotesProvider>
          <div className="site">
            <header className="site-header">
              <div className="shell header-content">
                <Link href="/" className="brand"><BookOpen size={24} strokeWidth={2.5} /> <span>nota<span className="brand-accent">.</span></span></Link>
                <nav className="nav" aria-label="Navegación principal">
                  {enlaces.map((enlace) => <Link key={enlace.href} href={enlace.href}>{enlace.texto}</Link>)}
                </nav>
                <Link href="/notas/nueva" className="button button-small header-action">+ Nueva nota</Link>
              </div>
            </header>
            <div className="site-content">{children}</div>
            <footer className="site-footer">
              <div className="shell footer-grid">
                <div><Link href="/" className="footer-logo">nota<span className="brand-accent">.</span></Link><p>Un espacio simple para guardar ideas, organizar tareas y estudiar mejor.</p></div>
                <div><h3>Explorar</h3><nav aria-label="Navegación del pie de página">{enlaces.map((enlace) => <Link href={enlace.href} key={enlace.href}>{enlace.texto}</Link>)}</nav></div>
                <div><h3>Proyecto</h3><p>Programación III · ITEC Río Cuarto</p><a href="https://github.com/BenjaDeLauro" target="_blank" rel="noopener noreferrer" className="external"><Github size={17}/> GitHub de Benja</a></div>
              </div>
              <div className="shell footer-bottom"><span>© 2026 Benjamín De Lauro</span><span>Hecho con <Heart size={14} fill="currentColor"/> y Next.js</span></div>
            </footer>
          </div>
        </NotesProvider>
      </body>
    </html>
  );
}
