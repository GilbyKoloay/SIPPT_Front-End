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
    familyCardNumber: '',
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
      subDistrict: '',
      wardVillage: '',
    }});
  };

  const SUNP_personalData_changeAddressSubDistrict = (val) => {
    setSUNP_personalData({...SUNP_personalData, address: {
      districtCity: SUNP_personalData.address.districtCity,
      subDistrict: val,
      wardVillage: '',
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
      familyCardNumber: '',
      religion: '',
      maritalStatus: '',
      job: '',
    });
  };

  const SUNP_BPJSKISData_changeCardNumber = (val) => {
    setSUNP_BPJSKISData({...SUNP_BPJSKISData, cardNumber: val});
  };

  const SUNP_BPJSKISData_changeName = (val) => {
    setSUNP_BPJSKISData({...SUNP_BPJSKISData, name: val});
  };

  const SUNP_BPJSKISData_changeBirthDateDate = (val) => {
    setSUNP_BPJSKISData({...SUNP_BPJSKISData, birthDate: {
      date: val,
      month: SUNP_BPJSKISData.birthDate.month,
      year: SUNP_BPJSKISData.birthDate.year,
    }});
  };

  const SUNP_BPJSKISData_changeBirthDateMonth = (val) => {
    setSUNP_BPJSKISData({...SUNP_BPJSKISData, birthDate: {
      date: SUNP_BPJSKISData.birthDate.date,
      month: val,
      year: SUNP_BPJSKISData.birthDate.year,
    }});
  };

  const SUNP_BPJSKISData_changeBirthDateYear = (val) => {
    setSUNP_BPJSKISData({...SUNP_BPJSKISData, birthDate: {
      date: SUNP_BPJSKISData.birthDate.date,
      month: SUNP_BPJSKISData.birthDate.month,
      year: val,
    }});
  };

  const SUNP_BPJSKISData_changeHealthFacilityLevel = (val) => {
    setSUNP_BPJSKISData({...SUNP_BPJSKISData, healthFacilityLevel: val});
  };

  const SUNP_BPJSKISData_changeNursingClass = (val) => {
    setSUNP_BPJSKISData({...SUNP_BPJSKISData, nursingClass: val});
  };

  const SUNP_BPJSKISData_changeNIK = (val) => {
    setSUNP_BPJSKISData({...SUNP_BPJSKISData, NIK: val});
  };

  const SUNP_BPJSKISData_changeAddress = (val) => {
    setSUNP_BPJSKISData({...SUNP_BPJSKISData, address: val});
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

  const SUNP_paymentMethod_changePaymentMethod = (val) => {
    setSUNP_paymentMethod({...SUNP_paymentMethod, paymentMethod: val});
  };

  const SUNP_paymentMethod_changeJKN = (val) => {
    setSUNP_paymentMethod({...SUNP_paymentMethod, JKN: val});
  };

  const SUNP_paymentMethod_changeOtherInsurance = (val) => {
    setSUNP_paymentMethod({...SUNP_paymentMethod, otherInsurance: val});
  };

  const SUNP_paymentMethod_changeNumber = (val) => {
    setSUNP_paymentMethod({...SUNP_paymentMethod, number: val});
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
          cardNumber: 1,
          name: 'one',
          birthDate: {
            date: 1,
            month: 2,
            year: 3,
          },
          healthFacilityLevel: 'one',
          nursingClass: 'one',
          NIK: 1,
          address: 'one one one',
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
            medicalRecordNumber: 10,
            name: 'one',
            birthPlace: 'one',
            birthDate: {
              date: 1,
              month: 2,
              year: 3,
            },
            sex: 'LAKI-LAKI',
            familyCardName: 'one',
            address: {
              districtCity: 'one',
              subDistrict: 'one',
              wardVillage: 'one',
            },
            phoneNumber: 1,
            religion: 'KRISTEN',
            maritalStatus: 'KAWIN',
            job: 'PELAJAR/MAHASISWA',
            paymentMethod: 'UMUM',
            JKN: 'KAB',
            otherInsurance: 'one',
            number: 1,
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
          // code if successfully created new data
        }
      }
    }
  };



  useEffect(() => {
    // console.log(SUNP_personalData); // dev
    // console.log(SUNP_BPJSKISData); // dev
    // console.log(SUNP_paymentMethod); // dev
  }, [dashboard, SUNP_personalData, SUNP_BPJSKISData, SUNP_paymentMethod]);



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
          SUNP_personalData_clear,
          SUNP_BPJSKISData,
          SUNP_BPJSKISData_changeCardNumber,
          SUNP_BPJSKISData_changeName,
          SUNP_BPJSKISData_changeBirthDateDate,
          SUNP_BPJSKISData_changeBirthDateMonth,
          SUNP_BPJSKISData_changeBirthDateYear,
          SUNP_BPJSKISData_changeHealthFacilityLevel,
          SUNP_BPJSKISData_changeNursingClass,
          SUNP_BPJSKISData_changeNIK,
          SUNP_BPJSKISData_changeAddress,
          SUNP_BPJSKISData_clear,
          SUNP_paymentMethod,
          SUNP_paymentMethod_changePaymentMethod,
          SUNP_paymentMethod_changeJKN,
          SUNP_paymentMethod_changeOtherInsurance,
          SUNP_paymentMethod_changeNumber,
          SUNP_paymentMethod_clear,
          SUNP_submitForm,
        }} />}
        {(dashboard.name === 'Pasien') && <Pasien />}
        {(dashboard.name === 'Antrian Poli') && <AntrianPoli />}
      </div>
      <Footer props={{text: 'Footer'}} />
    </div>
  );
}
