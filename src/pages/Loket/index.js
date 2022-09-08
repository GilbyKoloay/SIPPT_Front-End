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
    <div className='Loket'>
      <Header role={'LOKET'} name={'telor'} />
      <div className='Dashboard-Content'>
        <Dashboard contents={contents} onClick={dashboardOnClick} />
        <div className='Content'>
          {selectedContent === 'Daftar Pasien Baru' && <DaftarPasienBaru />}
          {selectedContent === 'Pasien' && <Pasien />}
          {selectedContent === 'Antrian Poli' && <AntrianPoli />}
        </div>
      </div>
      <Footer />
    </div>
  );
}
