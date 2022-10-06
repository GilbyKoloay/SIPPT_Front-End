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
  ButtonClear,
  DateInput,
} from '../../atoms';

export default function Pasien({ props }) {
  const {
    addressList, sexList, religionList, maritalStatusList, jobList, paymentMethodList, JKNList,
    patients,
    P_findPatient, P_findPatient_findUse_change,
    P_findPatient_findUseMRN_clear, P_findPatient_findUseMRN_change,
    P_findPatient_findUsePD_change, P_findPatient_findUsePD_address_change, P_findPatient_findUsePD_clear,
    P_findPatient_findUseBPJSKIS_change, P_findPatient_findUseBPJSKIS_clear,
  } = props;



  const [result_patients, setResult_patients] = useState(null);



  const filterByMRN = () => {
    
  };
  
  useEffect(() => {

  }, [P_findPatient]);



  return(
    <main>
      <div className='contentSplit'>
        <div className='content'>
          <Title props={{title: 'Cari Pasien'}} />
          <ButtonList props={{
            options: ['Cari Menggunakan Nomor Rekam Medis', 'Cari Menggunakan Data Diri', 'Cari Menggunakan BPJS/KIS'], 
            value: P_findPatient.findUse, 
            onChange: P_findPatient_findUse_change, 
            direction: 'col', 
          }} />
          <Gap props={{height: '25px'}} />
          <HorLine />
          <Gap props={{height: '25px'}} />
          { P_findPatient.findUse === 'Cari Menggunakan Nomor Rekam Medis' &&
            <form className='col'>
              <TextInput props={{
                label: 'No. Rekam Medis', 
                value: P_findPatient.medicalRecordNumber.medicalRecordNumber, 
                change: 'medicalRecordNumber', 
                onChange: P_findPatient_findUseMRN_change, 
              }} />
              <ButtonClear props={{onClick: P_findPatient_findUseMRN_clear}} />
            </form>
          }
          { P_findPatient.findUse === 'Cari Menggunakan Data Diri' &&
            <form className='col'>
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
              { P_findPatient.personalData.birthDateOption === 'Dari / Sampai' &&
                <DateInput props={{
                  label: 'Sampai', 
                  value: P_findPatient.personalData.birthDateSec, 
                  change: 'birthDateSec', 
                  onChange: P_findPatient_findUsePD_change, 
                  direction: 'col', 
                }} />
              }
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
              { P_findPatient.personalData.ageOption === 'Dari / Sampai' &&
                <TextInput props={{
                  label: 'Umur', 
                  value: P_findPatient.personalData.ageSec, 
                  onChange: P_findPatient_findUsePD_change, 
                }} />
              }
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
              <ButtonClear props={{onClick: P_findPatient_findUsePD_clear}} />
            </form>
          }
          { P_findPatient.findUse === 'Cari Menggunakan BPJS/KIS' &&
            <form className='col'>
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
              { P_findPatient.BPJSKIS.birthDateOption === 'Dari / Sampai' &&
                <DateInput props={{
                  label: 'Sampai', 
                  value: P_findPatient.BPJSKIS.birthDateSec, 
                  change: 'birthDateSec', 
                  onChange: P_findPatient_findUseBPJSKIS_change, 
                  direction: 'col', 
                }} />
              }
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
              <ButtonClear props={{onClick: P_findPatient_findUseBPJSKIS_clear}} />
            </form>
          }
        </div>
        <div className='content'>
          <Title props={{title: 'Hasil'}} />
          <div className='textErrMsg' style={{color: 'black'}}>Total pasien ditemukan: <b>{result_patients ? result_patients.length : '0'}</b></div>
        </div>
      </div>
    </main>
  );
}
