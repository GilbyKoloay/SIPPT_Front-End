// styles
import './styles.css';

export default function Dashboard() {
  return(
    <div className='Dashboard'>
      <div className='Items'>
        <div className='Title'>Dashboard</div>
        <div className='Item'>Daftar Pasien Baru</div>
        <div className='Item'>Pasien</div>
        <div className='Item'>Antrian Poli</div>
      </div>
      <div className='Logout'>Keluar</div>
    </div>
  );
}
