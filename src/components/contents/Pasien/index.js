// styles
import '../styles.css';

// atoms
import {
  Title,
  Button,
  Gap,
  HorLine,
  TextInput,
} from '../../atoms';

export default function Pasien() {
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
        </div>
        <div className='content'>right</div>
      </div>
    </main>
  );
}
