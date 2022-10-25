// styles
import '../styles.css';

// atoms
import {
  Title,
  ButtonList,
  Gap,
  TextInput,
  Select,
  Button,
} from '../../atoms';

export default function Obat({ props }) {
  const {
    __user,
    D_drugs, setD_drugs,
    D_drug_option, setD_drug_option,
    D_result, setD_result,
    D_add, D_add_change, D_add_submit,
  } = props;

  return(
    <main>
      <div className='contentSplit'>
        <div className='content'>
          <Title props={{
            title: 'Obat', 
          }} />
          <ButtonList props={{
            options: ['Cari Obat', 'Tambah Obat'], 
            value: D_drug_option, 
            direction: 'col', 
            onClick: setD_drug_option, 
          }} />
          <Gap props={{height: 25}} />
          { (D_drug_option === 'Cari Obat') && <div>

          </div> }
        </div>
        { (D_drug_option === 'Cari Obat') && <div className='content'>
          <Title props={{
            title: 'Hasil', 
          }} />
          {/* <div className='textErrMsg' style={{color: 'black'}}>Total pasien ditemukan: <b>{patientsResult ? patientsResult.length : '0'}</b></div> */}
          {/* <Gap props={{height: 15}} /> */}
        </div> }
        { (D_drug_option === 'Tambah Obat') && <div className='content'>
          <Title props={{
            title: 'Tambah Obat Baru', 
          }} />
          <TextInput props={{
              label: 'Nama Obat', 
              value: D_add.name, 
              onChange: D_add_change, 
              change: 'name', 
            }} />
            <Select props={{
              label: 'Tipe Obat', 
              options: ['TIPE OBAT', 'KAPSUL', 'KAPLET', 'SIRUP', 'DROPS', 'SALEP', 'TETES', 'KRIM', 'GEL', 'SUPOSITORIA', 'INJEKSI', 'CAIRAN INFUS', 'BMHP'], 
              value: D_add.type, 
              onChange: D_add_change,
              change: 'type', 
            }} />
            <Select props={{
              label: 'Unit Obat', 
              options: ['UNIT OBAT', 'BOTOL', 'BOX', 'ROLL', 'SATCHET'], 
              value: D_add.unit, 
              onChange: D_add_change, 
              change: 'unit', 
            }} />
            <TextInput props={{
              label: 'Nomor Batch', 
              value: D_add.batchNumber, 
              onChange: D_add_change, 
              change: 'batchNumber', 
            }} />
            <Button props={{
              label: 'Tambah Obat Baru', 
              type: 'primary', 
              onClick: D_add_submit, 
            }} />
        </div> }
      </div>
      <div className='content'>
        bottom
      </div>
    </main>
  );
}
