// styles
import '../styles.css';

// atoms
import {
  Title,
  TextInput,
  Select,
  DateInput,
} from '../../atoms';

export default function DaftarPasienBaru() {
  return(
    <main>
      <div className='contentFull'>
        <Title props={{title: 'Data Diri Pasien'}} />
        <form>
          <div className='form'>
            <TextInput props={{label: 'No. Rekam Medis'}} />
            <TextInput props={{label: 'Jenis Kelamin'}} />
            <TextInput props={{label: 'Alamat'}} />
            <Select props={{label: 'Kab. / Kota'}} />
            <Select props={{label: 'Kec'}} />
            <Select props={{label: 'Kel. / Desa'}} />
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
      </div>
    </main>
  );
}
