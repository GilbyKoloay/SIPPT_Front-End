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

export default function DaftarPasienBaru() {
  return(
    <main>
      <div className='contentFull'>
        <Title props={{title: 'Data Diri Pasien'}} />
        <form>
          <div className='form'>
            <TextInput props={{label: 'No. Rekam Medis'}} />
            <TextInput props={{label: 'Nama'}} />
            <RadioButton props={{label: "Jenis Kelamin", options: ['LAKI-LAKI', 'PEREMPUAN']}} />
            <div className='textLabel' style={{marginBottom: 15}}>Alamat: </div>
            <Select props={{label: 'Kab. / Kota', tab: true}} />
            <Select props={{label: 'Kec.', tab: true}} />
            <Select props={{label: 'Kel. / Desa', tab: true}} />
            <TextInput props={{label: 'No. Telepon'}} />
          </div>
          <div className='form'>
            <TextInput props={{label: 'Tempat Lahir'}} />
            <DateInput props={{label: 'Tanggal Lahir'}} />
            <TextInput props={{label: 'Umur', disabled: true}} />
            <TextInput props={{label: 'Nama KK'}} />
            <Select props={{label: 'Agama'}} />
            <Select props={{label: 'Status'}} />
            <Select props={{label: 'Pekerjaan'}} />
          </div>
        </form>
        <ButtonClear />
      </div>

      <div className='contentFull'>
        <Title props={{title: "Data BPJS/KIS Pasien"}} />
        <form>
          <div className='form'>
            <TextInput props={{label: "No. Kartu"}} />
            <TextInput props={{label: "Nama"}} />
            <DateInput props={{label: "Tanggal Lahir"}} />
            <TextInput props={{label: "Faskes Tingkat I"}} />
            <TextInput props={{label: "Kelas Rawat"}} />
          </div>
          <div className='form'>
            <TextInput props={{label: "NIK"}} />
            <TextAreaInput props={{label: "Alamat"}} />
          </div>
        </form>
        <ButtonClear />
      </div>

      <div className='contentFull'>
        <Title props={{title: "Cara Pembayaran"}} />
        <form>
          <div className='form'>
            <RadioButton props={{label: "Cara Pembayaran", options: ['Biaya Sendiri', 'Umum']}} />
            <RadioButton props={{label: "JKN", options: ['KM', 'KAB', 'A', 'S', 'M']}} />
          </div>
          <div className='form'>
            <TextInput props={{label: "Asuransi Lainnya"}} />
            <TextInput props={{label: "Nomor"}} />
          </div>
        </form>
        <ButtonClear />
      </div>
    </main>
  );
}
