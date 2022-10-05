import { useState, useEffect } from 'react';

// styles
import './styles.css';

// components
import {
  Header,
  Dashboard,
  Footer,
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
    familyCardName: '',
    religion: '',
    maritalStatus: '',
    job: '',
  });
  const [SUNP_BPJSKISData, setSUNP_BPJSKISData] = useState({
    cardNumber: '',
    name: '',
    birthDate: {
      date: '',
      month: '',
      year: '',
    },
    healthFacilityLevel: '',
    nursingClass: '',
    NIK: '',
    address: '',
  });
  const [SUNP_paymentMethod, setSUNP_paymentMethod] = useState({
    paymentMethod: '',
    JKN: '',
    otherInsurance: '',
    number: '',
  });
  
  const SUNP_personalData_change = (prop, val) => {
    setSUNP_personalData({...SUNP_personalData, [prop]: val});
    // setSUNP_personalData((typeof(prop) === 'string') ? 
    //   {...SUNP_personalData, [prop]: val} : 
    //   {...SUNP_personalData, [prop[0]][prop[1]] : val}
    // );
  };

  const SUNP_personalData_clear = () => {
    setSUNP_personalData({
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
      familyCardName: '',
      religion: '',
      maritalStatus: '',
      job: '',
    });
  };

  const SUNP_BPJSKISData_change = (prop, val) => {
    setSUNP_BPJSKISData({...SUNP_BPJSKISData, [prop]: val});
    // setSUNP_BPJSKISData((typeof(prop) === 'string') ? 
    //   {...SUNP_BPJSKISData, [prop]: val} : 
    //   {...SUNP_BPJSKISData, [prop[0]][prop[1]] : val}
    // );
  };

  const SUNP_BPJSKISData_clear = () => {
    setSUNP_BPJSKISData({
      cardNumber: '',
      name: '',
      birthDate: {
        date: '',
        month: '',
        year: '',
      },
      healthFacilityLevel: '',
      nursingClass: '',
      NIK: '',
      address: '',
    });
  };

  const SUNP_paymentMethod_change = (prop, val) => {
    setSUNP_paymentMethod({...SUNP_paymentMethod, [prop]: val});
    // setSUNP_paymentMethod((typeof(prop) === 'string') ? 
    //   {...SUNP_paymentMethod, [prop]: val} : 
    //   {...SUNP_paymentMethod, [prop[0]][prop[1]] : val}
    // );
  };

  const SUNP_paymentMethod_clear = () => {
    setSUNP_paymentMethod({
      paymentMethod: '',
      JKN: '',
      otherInsurance: '',
      number: '',
    });
  };

  const SUNP_submitForm = async () => {
    // create new patient's medical record
    const MRreq = await fetch(`${process.env.REACT_APP_API}/medicalRecord/create`, {
      method: 'POST',
      headers: {
        'authorization' : `Bearer ${__user.__token}`,
        'Content-type': 'application/json',
      },
      body: JSON.stringify({
        _employee: __user._id,
      }),
    });
    const MRres = await MRreq.json();
    
    if(MRres.status === 'success') {
      // create new patient's BPJS
      const BPJSreq = await fetch(`${process.env.REACT_APP_API}/BPJS/create`, {
        method: 'POST',
        headers: {
          'Authorization' : `Bearer ${__user.__token}`,
          'Content-type': 'application/json',
        },
        body: JSON.stringify({
          _employee: __user._id,
          cardNumber: SUNP_BPJSKISData.cardNumber,
          name: SUNP_BPJSKISData.name,
          birthDate: {
            date: SUNP_BPJSKISData.birthDate.date,
            month: SUNP_BPJSKISData.birthDate.month,
            year: SUNP_BPJSKISData.birthDate.year,
          },
          healthFacilityLevel: SUNP_BPJSKISData.healthFacilityLevel,
          nursingClass: SUNP_BPJSKISData.nursingClass,
          NIK: SUNP_BPJSKISData.NIK,
          address: SUNP_BPJSKISData.address,
        }),
      });
      const BPJSres = await BPJSreq.json();

      if(BPJSres.status === 'error') {
        // delete previously created medical record
        const MRreqDel = await fetch(`${process.env.REACT_APP_API}/medicalRecord/delete`, {
          method: 'DELETE',
          headers: {
            'Authorization' : `Bearer ${__user.__token}`,
            'Content-type': 'application/json',
          },
          body: JSON.stringify({
            _id: MRres.data._id,
          }),
        });
        const MRresDel = await MRreqDel;
      }
      else if(BPJSres.status === 'success') {
        // create new patient data
        const req = await fetch(`${process.env.REACT_APP_API}/patient/create`, {
          method: 'POST',
          headers: {
            'Authorization' : `Bearer ${__user.__token}`,
            'Content-type': 'application/json',
          },
          body: JSON.stringify({
            _employee: __user._id,
            _medicalRecord: MRres.data._id,
            _BPJS: BPJSres.data._id,
            medicalRecordNumber: SUNP_personalData.medicalRecordNumber,
            name: SUNP_personalData.name,
            birthPlace: SUNP_personalData.birthPlace,
            birthDate: {
              date: SUNP_personalData.birthDate.date,
              month: SUNP_personalData.birthDate.month,
              year: SUNP_personalData.birthDate.year,
            },
            sex: SUNP_personalData.sex,
            familyCardName: SUNP_personalData.familyCardName,
            address: {
              districtCity: SUNP_personalData.address.districtCity,
              subDistrict: SUNP_personalData.address.subDistrict,
              wardVillage: SUNP_personalData.address.wardVillage,
            },
            phoneNumber: SUNP_personalData.phoneNumber,
            religion: SUNP_personalData.religion,
            maritalStatus: SUNP_personalData.maritalStatus,
            job: SUNP_personalData.job,
            paymentMethod: SUNP_paymentMethod.paymentMethod,
            JKN: SUNP_paymentMethod.JKN,
            otherInsurance: SUNP_paymentMethod.otherInsurance,
            number: SUNP_paymentMethod.number,
          }),
        });
        const res = await req.json();

        if(res.status === 'error') {
          // delete previously cretated medical record and BPJS
          const MRreqDel = await fetch(`${process.env.REACT_APP_API}/medicalRecord/delete`, {
            method: 'DELETE',
            headers: {
              'Authorization' : `Bearer ${__user.__token}`,
              'Content-type': 'application/json',
            },
            body: JSON.stringify({
              _id: MRres.data._id,
            }),
          });
          const MRresDel = await MRreqDel;

          const BPJSreqDel = await fetch(`${process.env.REACT_APP_API}/bpjs/delete`, {
            method: 'DELETE',
            headers: {
              'Authorization' : `Bearer ${__user.__token}`,
              'Content-type': 'application/json',
            },
            body: JSON.stringify({
              _id: BPJSres.data._id,
            }),
          });
          const BPJSresDel = BPJSreqDel;
        }
        else if(res.status === 'success') {
          SUNP_personalData_clear();
          SUNP_BPJSKISData_clear();
          SUNP_paymentMethod_clear();
        }
      }
    }
  };



  useEffect(() => {
    console.log(SUNP_personalData); // dev
    // console.log(SUNP_BPJSKISData); // dev
    // console.log(SUNP_paymentMethod); // dev
  }, [dashboard, SUNP_personalData, SUNP_BPJSKISData, SUNP_paymentMethod]);



  return(
    <div className='loket'>
      <Header props={{name: __user.name, role: __user.role}} />
      <div className='dashboard-main'>
        <Dashboard props={{dashboardList, dashboard, setDashboard}} />
        {(dashboard.name === 'Daftar Pasien Baru') && <DaftarPasienBaru props={{
          SUNP_personalData, SUNP_personalData_change, SUNP_personalData_clear,
          SUNP_BPJSKISData, SUNP_BPJSKISData_change, SUNP_BPJSKISData_clear,
          SUNP_paymentMethod, SUNP_paymentMethod_change, SUNP_paymentMethod_clear,
          SUNP_submitForm,
        }} />}
        {(dashboard.name === 'Pasien') && <Pasien />}
        {(dashboard.name === 'Antrian Poli') && <AntrianPoli />}
      </div>
      <Footer props={{text: 'Footer'}} />
    </div>
  );
}
