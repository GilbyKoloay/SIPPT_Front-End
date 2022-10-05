// styles
import '../styles.css';

// atoms
import {
  Title,
  Button,
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
  } = props;

  return(
    <main>
      <div className='contentSplit'>
        <div className='content'>
          <Title props={{title: 'Cari Pasien'}} />
          <Button props={{title: 'Cari Menggunakan Nomor Rekam Medis'}} />
          <Gap props={{height: '15px'}} />
          <Button props={{title: 'Cari Menggunakan Data Diri'}} />
          <Gap props={{height: '15px'}} />
          <Button props={{title: 'Cari Menggunakan BPJS/KIS'}} />
          <Gap props={{height: '25px'}} />
          <HorLine />
          <Gap props={{height: '25px'}} />
          { // Cari Menggunakan Nomor Rekam Medis
            <form className='col'>
              <TextInput props={{
                label: 'No. Rekam Medis', 
              }} />
            </form>
          }
          { // Cari Menggunakan Data Diri
            <form className='col'>
              <TextInput props={{
                label: 'Nama', 
              }} />
              <RadioButton props={{
                label: 'Jenis Kelamin', 
                options: sexList, 
              }} />
              <div className='textLabel' style={{marginBottom: 15}}>Alamat: </div>
              <Select props={{
                label: 'Kab. / Kota', 
                options: ['(KABUPATEN / KOTA)'], 
                tab: true,
              }} />
              <Select props={{
                label: 'Kec.', 
                options: ['(KECAMATAN)'], 
                tab: true, 
              }} />
              <Select props={{
                label: 'Kel. / Desa', 
                options: ['(KELURAHAN / DESA)'], 
                tab: true,
              }} />
              <TextInput props={{
                label: 'No. Telepon', 
              }} />
              <TextInput props={{
                label: 'Tempat Lahir', 
              }} />
              <TextInput props={{
                label: 'Tanggal Lahir', 
              }} />
              <TextInput props={{
                label: 'Tanggal Lahir', 
              }} />
              <TextInput props={{
                label: 'Tanggal Lahir', 
              }} />
              <TextInput props={{
                label: 'Umur', 
              }} />
              <TextInput props={{
                label: 'Umur', 
              }} />
              <TextInput props={{
                label: 'Umur', 
              }} />
              <TextInput props={{
                label: 'Nama KK', 
              }} />
              <Select props={{
                label: 'Agama', 
                options: ['(AGAMA)', ...religionList], 
              }} />
              <Select props={{
                label: 'Status', 
                options: ['(STATUS)', ...maritalStatusList], 
              }} />
              <Select props={{
                label: 'Pekerjaan', 
                options: ['(PEKERJAAN)', ...jobList], 
              }} />
              <RadioButton props={{
                label: 'Cara Pembayaran', 
                options: paymentMethodList, 
              }} />
              <RadioButton props={{
                label: 'JKN', 
                options: JKNList, 
              }} />
              <TextInput props={{
                label: 'Umur', 
              }} />
            </form>
          }
          { // Cari Menggunakan BPJS/KIS
            <form className='col'>
              <TextInput props={{
                label: '', 
              }} />
              <TextInput props={{
                label: '', 
              }} />
              <TextInput props={{
                label: 'Tanggal Lahir', 
              }} />
              <TextInput props={{
                label: 'Tanggal Lahir', 
              }} />
              <TextInput props={{
                label: 'Faskes Tingkat I', 
              }} />
              <TextInput props={{
                label: 'Kelas Rawat', 
              }} />
              <TextInput props={{
                label: 'NIK', 
              }} />
              <TextAreaInput props={{
                label: 'Alamat', 
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
