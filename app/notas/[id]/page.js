import NoteDetail from '@/components/NoteDetail';
export default async function DetalleNotaPage({ params }) {
  const { id } = await params;
  return <main className="shell page page-narrow"><NoteDetail id={id}/></main>;
}
