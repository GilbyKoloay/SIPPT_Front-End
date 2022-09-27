// styles
import '../styles.css';

// atoms
import {
  Title,
  TextInput,
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
            <TextInput props={{label: 'Kab. / Kota'}} />
            <TextInput props={{label: 'Kec'}} />
            <TextInput props={{label: 'Kel. / Desa'}} />
            <TextInput props={{label: 'No. Telepon'}} />
          </div>
          <div className='form'>
            <TextInput props={{label: 'Tempat Lahir'}} />
            <TextInput props={{label: 'Tanggal Lahir'}} />
            <TextInput props={{label: 'Umur'}} />
            <TextInput props={{label: 'Nama KK'}} />
            <TextInput props={{label: 'Agama'}} />
            <TextInput props={{label: 'Status'}} />
            <TextInput props={{label: 'Pekerjaan'}} />
          </div>
        </form>
      </div>
    </main>
  );
}
