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
} from '../../atoms';

export default function Pasien({ props }) {
  const {
    addressList, sexList, religionList, maritalStatusList, jobList, paymentMethodList, JKNList,
    P_findPatient, P_findPatient_findUse_change, P_findPatient_findUseMRN_change,
  } = props;

  return(
    <main>
      <div className='contentSplit'>
        <div className='content'>
          <Title props={{title: 'Cari Pasien'}} />
          {/* <ButtonList props={{title: 'Cari Menggunakan Nomor Rekam Medis'}} />
          <Gap props={{height: '15px'}} />
          <ButtonList props={{title: 'Cari Menggunakan Data Diri'}} />
          <Gap props={{height: '15px'}} />
          <ButtonList props={{title: 'Cari Menggunakan BPJS/KIS'}} /> */}
          <ButtonList props={{
            options: ['Cari Menggunakan Nomor Rekam Medis', 'Cari Menggunakan Data Diri', 'Cari Menggunakan BPJS/KIS'], 
            value: P_findPatient.findUse, 
            onChange: P_findPatient_findUse_change, 
            direction: 'col', 
          }} />
          <Gap props={{height: '25px'}} />
          <HorLine />
          <Gap props={{height: '25px'}} />
          { // Cari Menggunakan Nomor Rekam Medis
            <form className='col'>
              <TextInput props={{
                label: 'No. Rekam Medis', 
                value: P_findPatient.medicalRecordNumber.medicalRecordNumber, 
                change: 'medicalRecordNumber', 
                onChange: P_findPatient_findUseMRN_change, 
              }} />
            </form>
          }
          { // Cari Menggunakan Data Diri
            <form className='col'>
              <TextInput props={{
                label: 'Nama', 
                value: P_findPatient.personalData.name, 
              }} />
              <RadioButton props={{
                label: 'Jenis Kelamin', 
                options: sexList, 
                value: P_findPatient.personalData.sex, 
              }} />
              <div className='textLabel' style={{marginBottom: 15}}>Alamat: </div>
              <Select props={{
                label: 'Kab. / Kota', 
                options: ['(KABUPATEN / KOTA)'], 
                value: P_findPatient.personalData.address.districtCity, 
                tab: true,
              }} />
              <Select props={{
                label: 'Kec.', 
                options: ['(KECAMATAN)'], 
                value: P_findPatient.personalData.address.subDistrict, 
                tab: true, 
              }} />
              <Select props={{
                label: 'Kel. / Desa', 
                options: ['(KELURAHAN / DESA)'], 
                value: P_findPatient.personalData.address.wardVillage, 
                tab: true,
              }} />
              <TextInput props={{
                label: 'No. Telepon', 
                value: P_findPatient.personalData.phoneNumber, 
              }} />
              <TextInput props={{
                label: 'Tempat Lahir', 
                value: P_findPatient.personalData.birthPlace, 
              }} />
              <Select props={{
                label: 'Tanggal Lahir', 
                options: ['(TANGGAL LAHIR)', 'Sama dengan', 'Sampai / Dari'], 
                value: P_findPatient.personalData.birthDateOption, 
              }} />
              <TextInput props={{
                label: 'Tanggal Lahir', 
              }} />
              <TextInput props={{
                label: 'Tanggal Lahir', 
              }} />
              <Select props={{
                label: 'Umur', 
                options: ['(UMUR)', 'Sama dengan', 'Sampai / Dari'], 
                value: P_findPatient.personalData.ageOption, 
              }} />
              <TextInput props={{
                label: 'Umur', 
              }} />
              <TextInput props={{
                label: 'Umur', 
              }} />
              <TextInput props={{
                label: 'Nama KK', 
                value: P_findPatient.personalData.familyCardName, 
              }} />
              <Select props={{
                label: 'Agama', 
                options: ['(AGAMA)', ...religionList], 
                value: P_findPatient.personalData.religion, 
              }} />
              <Select props={{
                label: 'Status', 
                options: ['(STATUS)', ...maritalStatusList], 
                value: P_findPatient.personalData.maritalStatus, 
              }} />
              <Select props={{
                label: 'Pekerjaan', 
                options: ['(PEKERJAAN)', ...jobList], 
                value: P_findPatient.personalData.job, 
              }} />
              <RadioButton props={{
                label: 'Cara Pembayaran', 
                options: paymentMethodList, 
                value: P_findPatient.personalData.paymentMethod, 
              }} />
              <RadioButton props={{
                label: 'JKN', 
                options: JKNList, 
                value: P_findPatient.personalData.JKN, 
              }} />
              <TextInput props={{
                label: 'Insuransi Lainnya', 
                value: P_findPatient.personalData.otherInsurance, 
              }} />
              <TextInput props={{
                label: 'Nomor', 
                value: P_findPatient.personalData.number, 
              }} />
            </form>
          }
          { // Cari Menggunakan BPJS/KIS
            <form className='col'>
              <TextInput props={{
                label: 'No. Kartu', 
                value: P_findPatient.BPJSKIS.cardNumber, 
              }} />
              <TextInput props={{
                label: 'Nama', 
                value: P_findPatient.BPJSKIS.name, 
              }} />
              <Select props={{
                label: 'Tanggal Lahir', 
                options: ['(TANGGAL LAHIR)', 'Sama dengan', 'Sampai / Dari'], 
                value: P_findPatient.BPJSKIS.birthDateOption, 
              }} />
              <TextInput props={{
                label: 'Tanggal Lahir', 
              }} />
              <TextInput props={{
                label: 'Tanggal Lahir', 
              }} />
              <TextInput props={{
                label: 'Faskes Tingkat I', 
                value: P_findPatient.BPJSKIS.healthFacilityLevel, 
              }} />
              <TextInput props={{
                label: 'Kelas Rawat', 
                value: P_findPatient.BPJSKIS.nursingClass, 
              }} />
              <TextInput props={{
                label: 'NIK', 
                value: P_findPatient.BPJSKIS.NIK, 
              }} />
              <TextAreaInput props={{
                label: 'Alamat', 
                value: P_findPatient.BPJSKIS.address, 
              }} />
            </form>
          }
        </div>
        <div className='content'>
          right
        </div>
      </div>
    </main>
  );
}
