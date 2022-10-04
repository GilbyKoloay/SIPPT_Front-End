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



  // PAGE
  const [dashboard, setDashboard] = useState(dashboardList[0]);
  const [SUNP_personalData, setSUNP_personalData]= useState({
    medicalRecordNumber: '',
    name: '',
    sex: '',
    address: {
      districtCity: 'MINAHASA UTARA',
      subDistrict: 'TALAWAAN',
      wardVillage: '',
    },
    phoneNumber: '',
    birthPlace: '',
    birthDate: {
      date: '',
      month: '',
      year: '',
    },
    age: '',
    familyCardNumber: '',
    religion: '',
    maritalStatus: '',
    job: '',
  });



  const SUNP_personalData_changeMedicalRecordNumber = (val) => {
    setSUNP_personalData({...SUNP_personalData, medicalRecordNumber: val});
  };

  const SUNP_personalData_changeName = (val) => {
    setSUNP_personalData({...SUNP_personalData, name: val});
  };

  const SUNP_personalData_changeSex = (val) => {
    setSUNP_personalData({...SUNP_personalData, sex: val});
  };

  const SUNP_personalData_changeAddressDistrictCity = (val) => {
    setSUNP_personalData({...SUNP_personalData, address: {
      districtCity: val,
      subDistrict: SUNP_personalData.address.subDistrict,
      wardVillage: SUNP_personalData.address.wardVillage,
    }});
  };

  const SUNP_personalData_changeAddressSubDistrict = (val) => {
    setSUNP_personalData({...SUNP_personalData, address: {
      districtCity: SUNP_personalData.address.districtCity,
      subDistrict: val,
      wardVillage: SUNP_personalData.address.wardVillage,
    }});
  };

  const SUNP_personalData_changeAddressWardVillage = (val) => {
    setSUNP_personalData({...SUNP_personalData, address: {
      districtCity: SUNP_personalData.address.districtCity,
      subDistrict: SUNP_personalData.address.subDistrict,
      wardVillage: val,
    }});
  };

  const SUNP_personalData_changeBirthPlace = (val) => {
    setSUNP_personalData({...SUNP_personalData, birthPlace: val});
  };

  const SUNP_personalData_changeBirthDateDate = (val) => {
    setSUNP_personalData({...SUNP_personalData, birthDate: {
      date: val,
      month: SUNP_personalData.birthDate.month,
      year: SUNP_personalData.birthDate.year,
    }});
  };

  const SUNP_personalData_changeBirthDateMonth = (val) => {
    setSUNP_personalData({...SUNP_personalData, birthDate: {
      date: SUNP_personalData.birthDate.date,
      month: val,
      year: SUNP_personalData.birthDate.year,
    }});
  };

  const SUNP_personalData_changeBirthDateYear = (val) => {
    setSUNP_personalData({...SUNP_personalData, birthDate: {
      date: SUNP_personalData.birthDate.date,
      month: SUNP_personalData.birthDate.month,
      year: val,
    }});
  };

  const SUNP_personalData_changePhoneNumber = (val) => {
    setSUNP_personalData({...SUNP_personalData, phoneNumber: val});
  };

  const SUNP_personalData_changeFamilyCardName = (val) => {
    setSUNP_personalData({...SUNP_personalData, familyCardNumber: val});
  };

  const SUNP_personalData_changeReligion = (val) => {
    setSUNP_personalData({...SUNP_personalData, religion: val});
  };

  const SUNP_personalData_changeMaritalStatus = (val) => {
    setSUNP_personalData({...SUNP_personalData, maritalStatus: val});
  };

  const SUNP_personalData_changeJob = (val) => {
    setSUNP_personalData({...SUNP_personalData, job: val});
  };



  useEffect(() => {
    console.log(SUNP_personalData); // dev
  }, [dashboard, SUNP_personalData]);



  return(
    <div className='loket'>
      <Header props={{name: __user.name, role: __user.role}} />
      <div className='dashboard-main'>
        <Dashboard props={{dashboardList, dashboard, setDashboard}} />
        {(dashboard.name === 'Daftar Pasien Baru') && <DaftarPasienBaru props={{
          SUNP_personalData,
          SUNP_personalData_changeMedicalRecordNumber,
          SUNP_personalData_changeName,
          SUNP_personalData_changeSex,
          SUNP_personalData_changeAddressDistrictCity,
          SUNP_personalData_changeAddressSubDistrict,
          SUNP_personalData_changeAddressWardVillage,
          SUNP_personalData_changeBirthPlace,
          SUNP_personalData_changeBirthDateDate,
          SUNP_personalData_changeBirthDateMonth,
          SUNP_personalData_changeBirthDateYear,
          SUNP_personalData_changePhoneNumber,
          SUNP_personalData_changeFamilyCardName,
          SUNP_personalData_changeReligion,
          SUNP_personalData_changeMaritalStatus,
          SUNP_personalData_changeJob,
        }} />}
        {(dashboard.name === 'Pasien') && <Pasien />}
        {(dashboard.name === 'Antrian Poli') && <AntrianPoli />}
      </div>
      <div className='footer'>Footer</div>
    </div>
  );
}
