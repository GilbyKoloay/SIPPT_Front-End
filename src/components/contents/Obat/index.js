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
  Table,
  HorLine,
  DateInput, 
  RadioButton, 
} from '../../atoms';

export default function Obat({ props }) {
  const {
    __user,
    D_drugs, setD_drugs,
    D_drug_option, setD_drug_option,
    D_drug_find, D_drug_findChange, D_drug_findClear,
    D_add, D_add_change, D_add_clear, D_add_submit,
    D_result, setD_result,
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
            <HorLine />
            <Gap props={{height: 25}} />
            <TextInput props={{
              label: 'Nama Obat', 
              value: D_drug_find.name, 
              onChange: D_drug_findChange, 
              change: 'name', 
            }} />
            <Select props={{
              label: 'Tipe Obat', 
              options: ['TIPE OBAT', 'KAPSUL', 'KAPLET', 'SIRUP', 'DROPS', 'SALEP', 'TETES', 'KRIM', 'GEL', 'SUPOSITORIA', 'INJEKSI', 'CAIRAN INFUS', 'BMHP'], 
              value: D_drug_find.type, 
              onChange: D_drug_findChange, 
              change: 'type', 
            }} />
            <Select props={{
              label: 'Unit', 
              options: ['UNIT OBAT', 'BOTOL', 'BOX', 'ROLL', 'SATCHET'], 
              value: D_drug_find.unit,
              onChange: D_drug_findChange, 
              change: 'unit', 
            }} />
            <TextInput props={{
              label: 'Nomor Batch', 
              value: D_drug_find.batchNumber, 
              onChange: D_drug_findChange, 
              change: 'batchNumber', 
            }} />
            <RadioButton props={{
              label: 'Tanggal Pemasukkan', 
              options: ['Sama dengan', 'Dari / Sampai'], 
              value: D_drug_find.receiveDateOption, 
              onChange: D_drug_findChange, 
              change: 'receiveDateOption', 
            }} />
            { (D_drug_find.receiveDateOption === 'Sama dengan') ? <div>
              <DateInput props={{
                label: 'Sama dengan', 
                value: D_drug_find.receiveDate, 
                onChange: D_drug_findChange, 
                change: 'receiveDate', 
                direction: 'col', 
              }} />
              </div> : (D_drug_find.receiveDateOption === 'Dari / Sampai') && <div>
                <DateInput props={{
                  label: 'Dari', 
                  value: D_drug_find.receiveDate, 
                  onChange: D_drug_findChange, 
                  change: 'receiveDate', 
                  direction: 'col', 
                }} />
                <DateInput props={{
                  label: 'Sampai', 
                  value: D_drug_find.receiveDateSec, 
                  onChange: D_drug_findChange, 
                  change: 'receiveDateSec', 
                  direction: 'col', 
                }} />
            </div> }
            <RadioButton props={{
              label: 'Tanggal Pengeluaran', 
              options: ['Sama dengan', 'Dari / Sampai'], 
              value: D_drug_find.expenditureDateOption, 
              onChange: D_drug_findChange, 
              change: 'expenditureDateOption', 
            }} />
            { (D_drug_find.expenditureDateOption === 'Sama dengan') ? <div>
              <DateInput props={{
                label: 'Sama dengan', 
                value: D_drug_find.expenditureDate, 
                onChange: D_drug_findChange, 
                change: 'expenditureDate', 
                direction: 'col', 
              }} />
              </div> : (D_drug_find.expenditureDateOption === 'Dari / Sampai') && <div>
                <DateInput props={{
                  label: 'Dari', 
                  value: D_drug_find.expenditureDate, 
                  onChange: D_drug_findChange, 
                  change: 'expenditureDate', 
                  direction: 'col', 
                }} />
                <DateInput props={{
                  label: 'Sampai', 
                  value: D_drug_find.expenditureDateSec, 
                  onChange: D_drug_findChange, 
                  change: 'expenditureDateSec', 
                  direction: 'col', 
                }} />
            </div> }
            <Button props={{
              label: 'Bersihkan', 
              onClick: D_drug_findClear, 
              type: 'quaternary', 
              position: 'right', 
            }} />
          </div> }
        </div>
        { (D_drug_option === 'Cari Obat') && <div className='content'>
          <Title props={{
            title: 'Hasil', 
          }} />
          {/* <div className='textErrMsg' style={{color: 'black'}}>Total pasien ditemukan: <b>{patientsResult ? patientsResult.length : '0'}</b></div> */}
          {/* <Gap props={{height: 15}} /> */}
          {/* <Table props={{
            titles: ['Nama Obat', 'Tipe Obat', 'Unit Obat', 'Nomor Batch'], 
            data: D_drugs, 
          }} /> */}
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
              label: 'Bersihkan', 
              onClick: D_add_clear, 
              type: 'quaternary', 
              position: 'right', 
            }} />
            <Gap props={{height: 25}} />
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
