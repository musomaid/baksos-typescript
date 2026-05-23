export default async function PatientDetail({params}:{params:Promise<{id:string}>}){const {id}=await params;return <div className="card">Detail pasien #{id}</div>}
