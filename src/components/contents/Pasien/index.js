// styles
import '../styles.css';

// atoms
import {
  Title,
  Button,
  TextInput,
} from '../../atoms';

export default function Pasien() {
  return(
    <main>
      <div className='contentSplit'>
        <div className='content'>
          <Title props={{title: 'Cari Pasien'}} />
          <Button props={{title: 'Cari Menggunakan Nomor Rekam Medis'}} />
        </div>
        <div className='content'>right</div>
      </div>
    </main>
  );
}
