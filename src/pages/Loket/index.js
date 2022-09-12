import { useState } from 'react';

// styles
import './styles.css';

// components
import {
  Header,
  Dashboard,
  Footer,

  DaftarPasienBaru,
  Pasien,
  AntrianPoli,
} from '../../components';

export default function Loket() {
  const [selectedContent, setSelectedContent] = useState('Dashboard');
  const contents = [
    'Daftar Pasien Baru',
    'Pasien',
    'Antrian Poli',
  ];

  const dashboardOnClick = (val) => {
    setSelectedContent(val);
  };

  return(
    <div className='loket'>
      <Header role={'LOKET'} name={'telor'} />
      <div className='dashboard-content'>
        <Dashboard contents={contents} onClick={dashboardOnClick} />
        {selectedContent === 'Daftar Pasien Baru' && <DaftarPasienBaru />}
        {selectedContent === 'Pasien' && <Pasien />}
        {selectedContent === 'Antrian Poli' && <AntrianPoli />}
      </div>
      <Footer />
    </div>
  );
}
