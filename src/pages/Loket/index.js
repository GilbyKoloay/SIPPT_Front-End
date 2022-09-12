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
  const [contents, setContents] = useState([
    { name: 'Dasbor', selected: true },
    { name: 'Daftar Pasien Baru', selected: false },
    { name: 'Pasien', selected: false },
    { name: 'Antrian Poli', selected: false }
  ]);

  const dashboardOnClick = (val) => {
    setContents(contents.map(c => c.name === val ? { name: c.name, selected: true } : { name: c.name, selected: false }));
    console.log(`contents`, contents);
  };

  return(
    <div className='loket'>
      <Header role={'LOKET'} name={'telor'} />
      <div className='dashboard-content'>
        <Dashboard contents={contents} onClick={dashboardOnClick} />
        {contents.map(c => (
          (c.name === 'Daftar Pasien Baru' && c.selected) ? <DaftarPasienBaru /> :
          (c.name === 'Pasien' && c.selected) ? <Pasien /> :
          (c.name === 'Antrian Poli' && c.selected) && <AntrianPoli />
        ))}
        {contents.forEach(c => console.log(c))}
      </div>
      <Footer />
    </div>
  );
}
