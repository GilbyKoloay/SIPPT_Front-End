// styles
import '../styles.css';

// atoms
import {
  TextInput
} from '../../atoms';

export default function DaftarPasienBaru() {
  return(
    <main>
      <div className='content'>
        <TextInput props={{title: 'Data Diri Pasien'}} />
      </div>
    </main>
  );
}
