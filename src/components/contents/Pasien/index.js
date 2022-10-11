import { useState, useEffect } from 'react';

// styles
import '../styles.css';

// atoms
import {
  Title,
  ButtonList,
  Gap,
  HorLine,
  TextInput,
  RadioButton,
  Select,
  TextAreaInput,
  DateInput,
  Table,
  Button,
} from '../../atoms';

export default function Pasien({ props }) {
  const {
    __user, addressList, sexList, religionList, maritalStatusList, jobList, paymentMethodList, JKNList,
    patients,
    P_patient, P_patient_option_change, P_patient_PDPM_change,
    setP_patientTemp, P_patientTemp, P_patientTemp_personalData_change, P_patientTemp_personalData_change_click, P_patientTemp_personalData_address_change,
    P_findPatient, P_findPatient_findUse_change,
    P_findPatient_findUseMRN_clear, P_findPatient_findUseMRN_change,
    P_findPatient_findUsePD_change, P_findPatient_findUsePD_address_change, P_findPatient_findUsePD_clear,
    P_findPatient_findUseBPJSKIS_change, P_findPatient_findUseBPJSKIS_clear,
  } = props;



  const [patientsResult, setPatientsResult] = useState(patients);


  
  const filterByMRN = () => {
    P_findPatient.medicalRecordNumber.medicalRecordNumber !== '' ? setPatientsResult(patients.filter(p => p.medicalRecordNumber.toString() === P_findPatient.medicalRecordNumber.medicalRecordNumber)) : setPatientsResult(patients);
  };

  const filterByPD = () => {
    // P_findPatient.name !== '' && setPatientsResult(patients.filter(p => p.name.toString() === P_findPatient.personalData.name));
    // P_findPatient.sex !== '' && setPatientsResult(patients.filter(p => p.sex.toString() === P_findPatient.personalData.sex));

    // setPatientsResult(patients.map(p => {
    //   P_findPatient.personalData.name !== '' && 
    // }));
  };

  const filterByBPJSKIS = () => {
    
  };

  const filter = () => {
    (P_findPatient.findUse === 'Cari Menggunakan Nomor Rekam Medis') && filterByMRN();
    (P_findPatient.findUse === 'Cari Menggunakan Data Diri') && filterByPD();
    (P_findPatient.findUse === 'Cari Menggunakan BPJS/KIS') && filterByBPJSKIS();
    // console.log(patientsResult);
  };
  
  useEffect(() => {
    filter();
  }, [P_findPatient, P_patient, P_patientTemp]);



  return(
    <main>
      <div className='contentSplit'>
        <div className='content'>
          <Title props={{title: 'Cari Pasien'}} />
          <ButtonList props={{
            options: ['Cari Menggunakan Nomor Rekam Medis', 'Cari Menggunakan Data Diri', 'Cari Menggunakan BPJS/KIS'], 
            value: P_findPatient.findUse, 
            onClick: P_findPatient_findUse_change, 
            direction: 'col', 
          }} />
          <Gap props={{height: '25px'}} />
          <HorLine />
          <Gap props={{height: '25px'}} />
          { P_findPatient.findUse === 'Cari Menggunakan Nomor Rekam Medis' && <form className='col'>
            <TextInput props={{
              label: 'No. Rekam Medis', 
              value: P_findPatient.medicalRecordNumber.medicalRecordNumber, 
              change: 'medicalRecordNumber', 
              onChange: P_findPatient_findUseMRN_change, 
            }} />
            <Button props={{
              label: 'Bersihkan', 
              onClick: P_findPatient_findUseMRN_clear, 
              type: 'quaternary', 
              position: 'right', 
            }} />
          </form> }
          { P_findPatient.findUse === 'Cari Menggunakan Data Diri' && <form className='col'>
            <TextInput props={{
              label: 'Nama', 
              value: P_findPatient.personalData.name, 
              change: 'name', 
              onChange: P_findPatient_findUsePD_change, P_findPatient_findUsePD_clear, 
            }} />
            <RadioButton props={{
              label: 'Jenis Kelamin', 
              options: sexList, 
              value: P_findPatient.personalData.sex, 
              change: 'sex', 
              onChange: P_findPatient_findUsePD_change, P_findPatient_findUsePD_clear, 
            }} />
            <div className='textLabel' style={{marginBottom: 15}}>Alamat: </div>
            <Select props={{
              label: 'Kab. / Kota', 
              options: ['(KABUPATEN / KOTA)', ...addressList.map(dc => dc.districtCity)], 
              value: P_findPatient.personalData.address.districtCity, 
              change: 'districtCity', 
              onChange: P_findPatient_findUsePD_address_change, 
              tab: true,
            }} />
            <Select props={{
              label: 'Kec.', 
              options: P_findPatient.personalData.address.districtCity === '' ? ['(KECAMATAN)'] : addressList.map(dc => (dc.districtCity === P_findPatient.personalData.address.districtCity) && ['(KECAMATAN)', ...dc.subDistricts.map(sd => sd.subDistrict)]).filter(v => v)[0], 
              value: P_findPatient.personalData.address.subDistrict, 
              change: 'subDistrict', 
              onChange: P_findPatient_findUsePD_address_change, 
              tab: true, 
            }} />
            <Select props={{
              label: 'Kel. / Desa', 
              options: P_findPatient.personalData.address.subDistrict === '' ? ['(KELURAHAN / DESA)'] : addressList.map(dc => (dc.districtCity === P_findPatient.personalData.address.districtCity) && dc.subDistricts.map(sd => (sd.subDistrict === P_findPatient.personalData.address.subDistrict) && ['(KELURAHAN / DESA)', ...sd.wardsVillages.map(wv => wv)]).filter(v => v)[0]).filter(v => v)[0], 
              value: P_findPatient.personalData.address.wardVillage, 
              change: 'wardVillage', 
              onChange: P_findPatient_findUsePD_address_change, 
              tab: true,
            }} />
            <TextInput props={{
              label: 'No. Telepon', 
              value: P_findPatient.personalData.phoneNumber, 
              change: 'phoneNumber', 
              onChange: P_findPatient_findUsePD_change, P_findPatient_findUsePD_clear, 
            }} />
            <TextInput props={{
              label: 'Tempat Lahir', 
              value: P_findPatient.personalData.birthPlace, 
              change: 'birthPlace', 
              onChange: P_findPatient_findUsePD_change, P_findPatient_findUsePD_clear, 
            }} />
            <RadioButton props={{
              label: 'Tanggal Lahir', 
              options: ['Sama dengan', 'Dari / Sampai'], 
              value: P_findPatient.personalData.birthDateOption, 
              change: 'birthDateOption', 
              onChange: P_findPatient_findUsePD_change, P_findPatient_findUsePD_clear, 
            }} />
            <DateInput props={{
              label: P_findPatient.personalData.birthDateOption === 'Sama dengan' ? 'Sama dengan' : 'Dari', 
              value: P_findPatient.personalData.birthDate, 
              change: 'birthDate', 
              onChange: P_findPatient_findUsePD_change, 
              direction: 'col', 
            }} />
            { P_findPatient.personalData.birthDateOption === 'Dari / Sampai' && <DateInput props={{
              label: 'Sampai', 
              value: P_findPatient.personalData.birthDateSec, 
              change: 'birthDateSec', 
              onChange: P_findPatient_findUsePD_change, 
              direction: 'col', 
            }} /> }
            <RadioButton props={{
              label: 'Umur', 
              options: ['Sama dengan', 'Dari / Sampai'], 
              value: P_findPatient.personalData.ageOption, 
              change: 'ageOption', 
              onChange: P_findPatient_findUsePD_change, 
            }} />
            <TextInput props={{
              label: 'Umur', 
              value: P_findPatient.personalData.ageSec, 
              onChange: P_findPatient_findUsePD_change, 
            }} />
            { P_findPatient.personalData.ageOption === 'Dari / Sampai' && <TextInput props={{
              label: 'Umur', 
              value: P_findPatient.personalData.ageSec, 
              onChange: P_findPatient_findUsePD_change, 
            }} /> }
            <TextInput props={{
              label: 'Nama KK', 
              value: P_findPatient.personalData.familyCardName, 
              change: 'familyCardName', 
              onChange: P_findPatient_findUsePD_change, P_findPatient_findUsePD_clear, 
            }} />
            <Select props={{
              label: 'Agama', 
              options: ['(AGAMA)', ...religionList], 
              value: P_findPatient.personalData.religion, 
              change: 'religion', 
              onChange: P_findPatient_findUsePD_change, P_findPatient_findUsePD_clear, 
            }} />
            <Select props={{
              label: 'Status', 
              options: ['(STATUS)', ...maritalStatusList], 
              value: P_findPatient.personalData.maritalStatus, 
              change: 'maritalStatus', 
              onChange: P_findPatient_findUsePD_change, P_findPatient_findUsePD_clear, 
            }} />
            <Select props={{
              label: 'Pekerjaan', 
              options: ['(PEKERJAAN)', ...jobList], 
              value: P_findPatient.personalData.job, 
              change: 'job', 
              onChange: P_findPatient_findUsePD_change, P_findPatient_findUsePD_clear, 
            }} />
            <RadioButton props={{
              label: 'Cara Pembayaran', 
              options: paymentMethodList, 
              value: P_findPatient.personalData.paymentMethod, 
              change: 'paymentMethod', 
              onChange: P_findPatient_findUsePD_change, P_findPatient_findUsePD_clear, 
            }} />
            <RadioButton props={{
              label: 'JKN', 
              options: JKNList, 
              value: P_findPatient.personalData.JKN, 
              change: 'JKN', 
              onChange: P_findPatient_findUsePD_change, P_findPatient_findUsePD_clear, 
            }} />
            <TextInput props={{
              label: 'Insuransi Lainnya', 
              value: P_findPatient.personalData.otherInsurance,
              change: 'otherInsurance', 
              onChange: P_findPatient_findUsePD_change, P_findPatient_findUsePD_clear, 
            }} />
            <TextInput props={{
              label: 'Nomor', 
              value: P_findPatient.personalData.number, 
              change: 'number', 
              onChange: P_findPatient_findUsePD_change, P_findPatient_findUsePD_clear, 
            }} />
            <Button props={{
              label: 'Bersihkan', 
              onClick: P_findPatient_findUsePD_clear, 
              type: 'quaternary', 
              position: 'right', 
            }} />
          </form> }
          { P_findPatient.findUse === 'Cari Menggunakan BPJS/KIS' && <form className='col'>
            <TextInput props={{
              label: 'No. Kartu', 
              value: P_findPatient.BPJSKIS.cardNumber, 
              change: 'cardNumber', 
              onChange: P_findPatient_findUseBPJSKIS_change, 
            }} />
            <TextInput props={{
              label: 'Nama', 
              value: P_findPatient.BPJSKIS.name, 
              change: 'name', 
              onChange: P_findPatient_findUseBPJSKIS_change, 
            }} />
            <RadioButton props={{
              label: 'Tanggal Lahir', 
              options: ['Sama dengan', 'Dari / Sampai'], 
              value: P_findPatient.BPJSKIS.birthDateOption, 
              change: 'birthDateOption', 
              onChange: P_findPatient_findUseBPJSKIS_change, 
            }} />
            <DateInput props={{
              label: P_findPatient.BPJSKIS.birthDateOption === 'Sama dengan' ? 'Sama dengan' : 'Dari', 
              value: P_findPatient.BPJSKIS.birthDate, 
              change: 'birthDate', 
              onChange: P_findPatient_findUseBPJSKIS_change, 
              direction: 'col', 
            }} />
            { P_findPatient.BPJSKIS.birthDateOption === 'Dari / Sampai' && <DateInput props={{
              label: 'Sampai', 
              value: P_findPatient.BPJSKIS.birthDateSec, 
              change: 'birthDateSec', 
              onChange: P_findPatient_findUseBPJSKIS_change, 
              direction: 'col', 
            }} /> }
            <TextInput props={{
              label: 'Faskes Tingkat I', 
              value: P_findPatient.BPJSKIS.healthFacilityLevel, 
              change: 'healthFacilityLevel', 
              onChange: P_findPatient_findUseBPJSKIS_change, 
            }} />
            <TextInput props={{
              label: 'Kelas Rawat', 
              value: P_findPatient.BPJSKIS.nursingClass, 
              change: 'nursingClass', 
              onChange: P_findPatient_findUseBPJSKIS_change, 
            }} />
            <TextInput props={{
              label: 'NIK', 
              value: P_findPatient.BPJSKIS.NIK, 
              change: 'NIK', 
              onChange: P_findPatient_findUseBPJSKIS_change, 
            }} />
            <TextAreaInput props={{
              label: 'Alamat', 
              value: P_findPatient.BPJSKIS.address, 
              change: 'address', 
              onChange: P_findPatient_findUseBPJSKIS_change, 
            }} />
            <Button props={{
              label: 'Bersihkan', 
              onClick: P_findPatient_findUseBPJSKIS_clear, 
              type: 'quaternary', 
              position: 'right', 
            }} />
          </form> }
        </div>
        <div className='content'>
          <Title props={{title: 'Hasil'}} />
          <div className='textErrMsg' style={{color: 'black', marginBottom: '15px'}}>Total pasien ditemukan: <b>{patientsResult ? patientsResult.length : '0'}</b></div>
          <Table props={{
            titles: ['No. Rekam Medis', 'Nama'], 
            selected: P_patient.PD_PM, 
            data: patientsResult, 
            onClick: P_patient_PDPM_change, 
          }} />
        </div>
      </div>
      { P_patient.PD_PM && <div className='content'>
        <Title props={{title: P_patient.PD_PM.name}} />
        <ButtonList props={{
          options: ['Data Diri', 'BPJS/KIS', 'Cara Pembayaran', 'Rekam Medis', 'Poli'], 
          value: P_patient.option, 
          onClick: P_patient_option_change, 
          direction: 'row', 
        }} />
        { P_patient.option && <div>
          <Gap props={{height: '25px'}} />
          <HorLine />
          <Gap props={{height: '25px'}} />
        </div> }

        { P_patient.option === 'Data Diri' && <div>
          <form className='row'>
            <div className='form'>
              <TextInput props={{
                label: 'No. Rekam Medis', 
                value: P_patientTemp.PD_PM.medicalRecordNumber, 
                change: 'medicalRecordNumber', 
                onChange: P_patientTemp_personalData_change, 
                disabled: !P_patientTemp.personalDataOnChange, 
              }} />
              <TextInput props={{
                label: 'Nama', 
                value: P_patientTemp.PD_PM.name, 
                change: 'name', 
                onChange: P_patientTemp_personalData_change, 
                disabled: !P_patientTemp.personalDataOnChange, 
              }} />
              <RadioButton props={{
                label: "Jenis Kelamin", 
                options: sexList, 
                value: P_patientTemp.PD_PM.sex, 
                change: 'sex', 
                onChange: P_patientTemp_personalData_change, 
                disabled: !P_patientTemp.personalDataOnChange, 
              }} />
              <div className='textLabel' style={{marginBottom: 15}}>Alamat: </div>
              <Select props={{
                label: 'Kab. / Kota', 
                options: ['(KABUPATEN / KOTA)', ...addressList.map(dc => dc.districtCity)], 
                value: P_patientTemp.PD_PM.address.districtCity, 
                change: 'districtCity', 
                onChange: P_patientTemp_personalData_address_change, 
                tab: true, 
              }} />
              <Select props={{
                label: 'Kec.', 
                options: P_patientTemp.PD_PM.address.districtCity === '' ? ['(KECAMATAN)'] : addressList.map(dc => (dc.districtCity === P_patientTemp.PD_PM.address.districtCity) && ['(KECAMATAN)', ...dc.subDistricts.map(sd => sd.subDistrict)]).filter(v => v)[0], 
                value: P_patientTemp.PD_PM.address.subDistrict, 
                change: 'subDistrict', 
                onChange: P_patientTemp_personalData_address_change, 
                tab: true, 
              }} />
              <Select props={{
                label: 'Kel. / Desa', 
                options: P_patientTemp.PD_PM.address.subDistrict === '' ? ['(KELURAHAN / DESA)'] : addressList.map(dc => (dc.districtCity === P_patientTemp.PD_PM.address.districtCity) && dc.subDistricts.map(sd => (sd.subDistrict === P_patientTemp.PD_PM.address.subDistrict) && ['(KELURAHAN / DESA)', ...sd.wardsVillages.map(wv => wv)]).filter(v => v)[0]).filter(v => v)[0], 
                value: P_patientTemp.PD_PM.address.wardVillage, 
                change: 'wardVillage', 
                onChange: P_patientTemp_personalData_address_change, 
                tab: true, 
              }} />
              <TextInput props={{
                label: 'No. Telepon', 
                value: P_patientTemp.PD_PM.phoneNumber, 
                change: 'phoneNumber', 
                onChange: P_patientTemp_personalData_change, 
                disabled: !P_patientTemp.personalDataOnChange, 
              }} />
            </div>
            <div className='form'>
              <TextInput props={{
                label: 'Tempat Lahir', 
                value: P_patientTemp.PD_PM.birthPlace, 
                change: 'birthPlace', 
                onChange: P_patientTemp_personalData_change, 
                disabled: !P_patientTemp.personalDataOnChange, 
              }} />
              <DateInput props={{
                label: 'Tanggal Lahir', 
                value: P_patientTemp.PD_PM.birthDate, 
                change: 'birthDate', 
                onChange: P_patientTemp_personalData_change, 
              }} />
              <TextInput props={{
                label: 'Umur', 
                value: P_patientTemp.PD_PM.age, 
                change: 'age', 
                onChange: () => console.log(`function not yet made`), 
                disabled: true, 
              }} />
              <TextInput props={{
                label: 'Nama KK', 
                value: P_patientTemp.PD_PM.familyCardName, 
                change: 'familyCardName', 
                onChange: P_patientTemp_personalData_change, 
                disabled: !P_patientTemp.personalDataOnChange, 
              }} />
              <Select props={{
                label: 'Agama', 
                options: ['(AGAMA)', ...religionList], 
                value: P_patientTemp.PD_PM.religion, 
                change: 'religion', 
                onChange: P_patientTemp_personalData_change, 
              }} />
              <Select props={{
                label: 'Status', 
                options: ['(STATUS)', ...maritalStatusList], 
                value: P_patientTemp.PD_PM.maritalStatus, 
                change: 'maritalStatus', 
                onChange: P_patientTemp_personalData_change, 
              }} />
              <Select props={{
                label: 'Pekerjaan', 
                options: ['(PEKERJAAN)', ...jobList], 
                value: P_patientTemp.PD_PM.job, 
                change: 'job', 
                onChange: P_patientTemp_personalData_change, 
              }} />
            </div>
          </form>
          { (__user.role === 'ADMINISTRATOR' || __user.role === 'LOKET') && (
            (P_patientTemp.personalDataOnChange === false) ?
            <Button props={{
              label: 'Ubah', 
              onClick: () => setP_patientTemp({...P_patientTemp, personalDataOnChange: true}), 
              type: 'tertiary', 
              position: 'right', 
            }} /> :
            <ButtonList props={{
              options: ['Simpan Perubahan', 'Batalkan Perubahan'], 
              value: P_patientTemp.personalDataOnChange, 
              onClick: P_patientTemp_personalData_change_click,
              direction: 'row', 
              align: 'end', 
            }} />
          )}
        </div> }
        
        { P_patient.option === 'BPJS/KIS' && <div>
          <form className='row'>
            <div className='form'>
              <TextInput props={{
                label: "No. Kartu", 
                value: P_patient.BPJSKIS.cardNumber, 
                change: 'cardNumber', 
                // onChange: SUNP_BPJSKISData_change, 
              }} />
              <TextInput props={{
                label: "Nama", 
                value: P_patient.BPJSKIS.name,
                change: 'name', 
                // onChange: SUNP_BPJSKISData_change, 
              }} />
              <DateInput props={{
                label: 'Tanggal Lahir', 
                value: P_patient.BPJSKIS.birthDate, 
                change: 'birthDate', 
                // onChange: SUNP_BPJSKISData_change, 
              }} />
              <TextInput props={{
                label: 'Faskes Tingkat I', 
                value: P_patient.BPJSKIS.healthFacilityLevel, 
                change: 'healthFacilityLevel', 
                // onChange: SUNP_BPJSKISData_change, 
              }} />
              <TextInput props={{
                label: 'Kelas Rawat', 
                value: P_patient.BPJSKIS.nursingClass, 
                change: 'nursingClass', 
                // onChange: SUNP_BPJSKISData_change, 
              }} />
            </div>
            <div className='form'>
              <TextInput props={{
                label: 'NIK', 
                value: P_patient.BPJSKIS.NIK, 
                change: 'NIK', 
                // onChange: SUNP_BPJSKISData_change, 
              }} />
              <TextAreaInput props={{
                label: 'Alamat', 
                value: P_patient.BPJSKIS.address, 
                change: 'address', 
                // onChange: SUNP_BPJSKISData_change, 
              }} />
            </div>
          </form>
          { (__user.role === 'LOKET' || __user.role === 'ADMINISTRATOR') && <Button props={{
            label: 'Ubah', 
            // onClick: , 
            type: 'tertiary', 
            position: 'right', 
          }} /> }
        </div> }

        { P_patient.option === 'Cara Pembayaran' && <div>
          <form className='row'>
            <div className='form'>
              <RadioButton props={{
                label: 'Cara Pembayaran', 
                options: paymentMethodList, 
                value: P_patient.PD_PM.paymentMethod, 
                change: 'paymentMethod', 
                // onChange: SUNP_paymentMethod_change, 
              }} />
              <RadioButton props={{
                label: 'JKN', 
                options: JKNList, 
                value: P_patient.PD_PM.JKN, 
                change: 'JKN', 
                // onChange: SUNP_paymentMethod_change, 
              }} />
            </div>
            <div className='form'>
              <TextInput props={{
                label: 'Asuransi Lainnya', 
                value: P_patient.PD_PM.otherInsurance, 
                change: 'otherInsurance', 
                // onChange: SUNP_paymentMethod_change, 
              }} />
              <TextInput props={{
                label: 'Nomor', 
                value: P_patient.PD_PM.number, 
                change: 'number', 
                // onChange: SUNP_paymentMethod_change, 
              }} />
            </div>
          </form>
          { (__user.role === 'LOKET' || __user.role === 'ADMINISTRATOR') && <Button props={{
            label: 'Ubah', 
            // onClick: , 
            type: 'tertiary', 
            position: 'right', 
          }} /> }
        </div>}
      </div> }
    </main>
  );
}
