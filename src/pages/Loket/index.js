import { useState, useEffect } from 'react';

// styles
import './styles.css';

// components
import {
  Header,
  Dashboard,
} from '../../components/molecules';

// contents
import {
  DaftarPasienBaru,
  Pasien,
  AntrianPoli,
} from '../../components/contents';

export default function Loket({ props }) {
  const { __user } = props;
  const dashboardList = [
    { id: 1, name: 'Dasbor' },
    { id: 2, name: 'Daftar Pasien Baru' },
    { id: 3, name: 'Pasien' },
    { id: 4, name: 'Antrian Poli' },
  ];

  const [dashboard, setDashboard] = useState(dashboardList[0]);

  useEffect(() => {
    // console.log(__user);
  }, [dashboard]);

  return(
    <div className='loket'>
      <Header props={{name: __user.name, role: __user.role}} />
      <div className='dashboard-main'>
        <Dashboard props={{dashboardList, setDashboard}} />
        {(dashboard.name === 'Daftar Pasien Baru') && <DaftarPasienBaru />}
        {(dashboard.name === 'Pasien') && <Pasien />}
        {(dashboard.name === 'Antrian Poli') && <AntrianPoli />}
      </div>
      <div className='footer'>Footer</div>
    </div>
  );
}
