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

export default function Loket({ props }) {
  const { __token, __setToken } = props;
  const [selectedContent, setSelectedContent] = useState('Dashboard');
  const [contents, setContents] = useState([
    { name: 'Dasbor', selected: true },
    { name: 'Daftar Pasien Baru', selected: false },
    { name: 'Pasien', selected: false },
    { name: 'Antrian Poli', selected: false }
  ]);

  const dashboardOnClick = (val) => {
    console.log(__token);
    setContents(contents.map(c => c.name === val ? { name: c.name, selected: true } : { name: c.name, selected: false }));
  };

  return(
    <div className='loket'>
      <Header role={'LOKET'} name={'telor'} />
      <div className='dashboard-content'>
        <Dashboard __setToken={__setToken} contents={contents} onClick={dashboardOnClick} />
        {contents.map((c, index) => (
          (c.name === 'Daftar Pasien Baru' && c.selected) ? <DaftarPasienBaru key={index} /> :
          (c.name === 'Pasien' && c.selected) ? <Pasien key={index} /> :
          (c.name === 'Antrian Poli' && c.selected) && <AntrianPoli key={index} />
        ))}
      </div>
      <Footer />
    </div>
  );
}
