export default async function VisitDetail({params}:{params:Promise<{id:string}>}){const {id}=await params;return <div className="card">Pemeriksaan kunjungan #{id}</div>}
