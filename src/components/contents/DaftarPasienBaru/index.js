// styles
import '../styles.css';

// atoms
import {
  Title,
  TextInput,
  Select,
  DateInput,
  ButtonClear,
  TextAreaInput,
  RadioButton,
} from '../../atoms';

export default function DaftarPasienBaru({ props }) {
  const {
    addressList, sexList, religionList, maritalStatusList, jobList, paymentMethodList, JKNList,
    SUNP_personalData, SUNP_personalData_change, SUNP_personalData_clear,
    SUNP_BPJSKISData, SUNP_BPJSKISData_change, SUNP_BPJSKISData_clear,
    SUNP_paymentMethod, SUNP_paymentMethod_change, SUNP_paymentMethod_clear,
    SUNP_submitForm,
  } = props;

  return(
    <main>
      <div className='content'>
        <Title props={{title: "Data Diri Pasien"}} />
        <form className='row'>
          <div className='form'>
            <TextInput props={{
              label: 'No. Rekam Medis', 
              value: SUNP_personalData.medicalRecordNumber, 
              change: 'medicalRecordNumber', 
              onChange: SUNP_personalData_change,
            }} />
            <TextInput props={{
              label: 'Nama', 
              value: SUNP_personalData.name, 
              change: 'name', 
              onChange: SUNP_personalData_change,
            }} />
            <RadioButton props={{
              label: "Jenis Kelamin", 
              options: sexList, 
              value: SUNP_personalData.sex, 
              change: 'sex', 
              onChange: SUNP_personalData_change, 
            }} />
            <div className='textLabel' style={{marginBottom: 15}}>Alamat: </div>
            <Select props={{
              label: 'Kab. / Kota', 
              options: ['(KABUPATEN / KOTA)', ...addressList.map(dc => dc.districtCity)], 
              value: SUNP_personalData.address.districtCity, 
              // change: ['address', 'districtCity'], 
              // onChange: SUNP_personalData_change, 
              tab: true, 
            }} />
            <Select props={{
              label: 'Kec.', 
              options: SUNP_personalData.address.districtCity === '' ? ['(KECAMATAN)'] : addressList.map(dc => (dc.districtCity === SUNP_personalData.address.districtCity) && ['(KECAMATAN)', ...dc.subDistricts.map(sd => sd.subDistrict)]).filter(v => v)[0], 
              value: SUNP_personalData.address.subDistrict, 
              // change: ['address', 'subDistrict'], 
              // onChange: SUNP_personalData_change, 
              tab: true, 
            }} />
            <Select props={{
              label: 'Kel. / Desa', 
              options: SUNP_personalData.address.subDistrict === '' ? ['(KELURAHAN / DESA)'] : addressList.map(dc => (dc.districtCity === SUNP_personalData.address.districtCity) && dc.subDistricts.map(sd => (sd.subDistrict === SUNP_personalData.address.subDistrict) && ['(KELURAHAN / DESA)', ...sd.wardsVillages.map(wv => wv)]).filter(v => v)[0]).filter(v => v)[0], 
              value: SUNP_personalData.address.wardVillage, 
              // change: ['address', 'wardVillage'], 
              // onChange: SUNP_personalData_change, 
              tab: true, 
            }} />
            <TextInput props={{
              label: 'No. Telepon', 
              value: SUNP_personalData.phoneNumber, 
              change: 'phoneNumber', 
              onChange: SUNP_personalData_change,
            }} />
          </div>
          <div className='form'>
            <TextInput props={{
              label: 'Tempat Lahir', 
              value: SUNP_personalData.birthPlace, 
              change: 'birthPlace', 
              onChange: SUNP_personalData_change,
            }} />
            <DateInput props={{
              label: 'Tanggal Lahir', 
              value: SUNP_personalData.birthDate, 
              onChange: {
                // date: SUNP_personalData_changeBirthDateDate, 
                // month: SUNP_personalData_changeBirthDateMonth, 
                // year: SUNP_personalData_changeBirthDateYear, 
            }}} />
            <TextInput props={{
              label: 'Umur', 
              value: SUNP_personalData.age, 
              change: 'age', 
              onChange: () => console.log(`function not yet made`), 
              disabled: true, 
            }} />
            <TextInput props={{
              label: 'Nama KK', 
              value: SUNP_personalData.familyCardName, 
              change: 'familyCardName', 
              onChange: SUNP_personalData_change,
            }} />
            <Select props={{
              label: 'Agama', 
              options: ['(AGAMA)', ...religionList], 
              value: SUNP_personalData.religion, 
              change: 'religion', 
              onChange: SUNP_personalData_change, 
            }} />
            <Select props={{
              label: 'Status', 
              options: ['(STATUS)', ...maritalStatusList], 
              value: SUNP_personalData.maritalStatus, 
              change: 'maritalStatus', 
              onChange: SUNP_personalData_change, 
            }} />
            <Select props={{
              label: 'Pekerjaan', 
              options: ['(PEKERJAAN)', ...jobList], 
              value: SUNP_personalData.job, 
              change: 'job', 
              onChange: SUNP_personalData_change, 
            }} />
          </div>
        </form>
        <ButtonClear props={{onClick: SUNP_personalData_clear}} />
      </div>

      <div className='content'>
        <Title props={{title: "Data BPJS/KIS Pasien"}} />
        <form className='row'>
          <div className='form'>
            <TextInput props={{
              label: "No. Kartu", 
              value: SUNP_BPJSKISData.cardNumber, 
              change: 'cardNumber', 
              onChange: SUNP_BPJSKISData_change, 
            }} />
            <TextInput props={{
              label: "Nama", 
              value: SUNP_BPJSKISData.name,
              change: 'name', 
              onChange: SUNP_BPJSKISData_change, 
            }} />
            <DateInput props={{
              label: 'Tanggal Lahir', 
              value: SUNP_BPJSKISData.birthDate, 
              // change: '', 
              onChange: {
                // date: SUNP_BPJSKISData_changeBirthDateDate, 
                // month: SUNP_BPJSKISData_changeBirthDateMonth, 
                // year: SUNP_BPJSKISData_changeBirthDateYear, 
            }}} />
            <TextInput props={{
              label: 'Faskes Tingkat I', 
              value: SUNP_BPJSKISData.healthFacilityLevel, 
              change: 'healthFacilityLevel', 
              onChange: SUNP_BPJSKISData_change, 
            }} />
            <TextInput props={{
              label: 'Kelas Rawat', 
              value: SUNP_BPJSKISData.nursingClass, 
              change: 'nursingClass', 
              onChange: SUNP_BPJSKISData_change, 
            }} />
          </div>
          <div className='form'>
            <TextInput props={{
              label: 'NIK', 
              value: SUNP_BPJSKISData.NIK, 
              change: 'NIK', 
              onChange: SUNP_BPJSKISData_change, 
            }} />
            <TextAreaInput props={{
              label: 'Alamat', 
              value: SUNP_BPJSKISData.address, 
              change: 'address', 
              onChange: SUNP_BPJSKISData_change, 
            }} />
          </div>
        </form>
        <ButtonClear props={{onClick: SUNP_BPJSKISData_clear}} />
      </div>

      <div className='content'>
        <Title props={{title: "Cara Pembayaran"}} />
        <form className='row'>
          <div className='form'>
            <RadioButton props={{
              label: 'Cara Pembayaran', 
              options: paymentMethodList, 
              value: SUNP_paymentMethod.paymentMethod, 
              change: 'paymentMethod', 
              onChange: SUNP_paymentMethod_change, 
            }} />
            <RadioButton props={{
              label: 'JKN', 
              options: JKNList, 
              value: SUNP_paymentMethod.JKN, 
              change: 'JKN', 
              onChange: SUNP_paymentMethod_change, 
            }} />
          </div>
          <div className='form'>
            <TextInput props={{
              label: 'Asuransi Lainnya', 
              value: SUNP_paymentMethod.otherInsurance, 
              change: 'otherInsurance', 
              onChange: SUNP_paymentMethod_change, 
            }} />
            <TextInput props={{
              label: 'Nomor', 
              value: SUNP_paymentMethod.number, 
              change: 'number', 
              onChange: SUNP_paymentMethod_change, 
            }} />
          </div>
        </form>
        <ButtonClear props={{onClick: SUNP_paymentMethod_clear}} />
      </div>
      <button className='submitForm textInput' onClick={() => SUNP_submitForm()}>Daftar Pasien Baru</button>
      {/* <button className='submitForm'>Tidak dapat mendaftar pasien baru karena data tidak valid</button> */}
    </main>
  );
}
