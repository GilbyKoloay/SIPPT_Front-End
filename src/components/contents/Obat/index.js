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
    D_drugs,
    D_drug_option, setD_drug_option,
    D_drug_find, D_drug_find_change, D_drug_find_clear,
    D_drug_add, D_drug_add_change, D_drug_add_clear, D_drug_add_submit,
    D_result, setD_result, D_drugSelected, setD_drugSelected, D_drugSelected_data_change, D_drugSelected_option_change,
    D_drugSelected_drugData, D_drugSelected_drugData_change, D_drugSelected_drugData_changeChange,
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
              onChange: D_drug_find_change, 
              change: 'name', 
            }} />
            <Select props={{
              label: 'Tipe Obat', 
              options: ['TIPE OBAT', 'KAPSUL', 'KAPLET', 'SIRUP', 'DROPS', 'SALEP', 'TETES', 'KRIM', 'GEL', 'SUPOSITORIA', 'INJEKSI', 'CAIRAN INFUS', 'BMHP'], 
              value: D_drug_find.type, 
              onChange: D_drug_find_change, 
              change: 'type', 
            }} />
            <Select props={{
              label: 'Unit', 
              options: ['UNIT OBAT', 'BOTOL', 'BOX', 'ROLL', 'SATCHET'], 
              value: D_drug_find.unit,
              onChange: D_drug_find_change, 
              change: 'unit', 
            }} />
            <TextInput props={{
              label: 'Nomor Batch', 
              value: D_drug_find.batchNumber, 
              onChange: D_drug_find_change, 
              change: 'batchNumber', 
            }} />
            <RadioButton props={{
              label: 'Tanggal Pemasukkan', 
              options: ['Sama dengan', 'Dari / Sampai'], 
              value: D_drug_find.receiveDateOption, 
              onChange: D_drug_find_change, 
              change: 'receiveDateOption', 
            }} />
            { (D_drug_find.receiveDateOption === 'Sama dengan') ? <div>
              <DateInput props={{
                label: 'Sama dengan', 
                value: D_drug_find.receiveDate, 
                onChange: D_drug_find_change, 
                change: 'receiveDate', 
                direction: 'col', 
              }} />
              </div> : (D_drug_find.receiveDateOption === 'Dari / Sampai') && <div>
                <DateInput props={{
                  label: 'Dari', 
                  value: D_drug_find.receiveDate, 
                  onChange: D_drug_find_change, 
                  change: 'receiveDate', 
                  direction: 'col', 
                }} />
                <DateInput props={{
                  label: 'Sampai', 
                  value: D_drug_find.receiveDateSec, 
                  onChange: D_drug_find_change, 
                  change: 'receiveDateSec', 
                  direction: 'col', 
                }} />
            </div> }
            <RadioButton props={{
              label: 'Tanggal Pengeluaran', 
              options: ['Sama dengan', 'Dari / Sampai'], 
              value: D_drug_find.expenditureDateOption, 
              onChange: D_drug_find_change, 
              change: 'expenditureDateOption', 
            }} />
            { (D_drug_find.expenditureDateOption === 'Sama dengan') ? <div>
              <DateInput props={{
                label: 'Sama dengan', 
                value: D_drug_find.expenditureDate, 
                onChange: D_drug_find_change, 
                change: 'expenditureDate', 
                direction: 'col', 
              }} />
              </div> : (D_drug_find.expenditureDateOption === 'Dari / Sampai') && <div>
                <DateInput props={{
                  label: 'Dari', 
                  value: D_drug_find.expenditureDate, 
                  onChange: D_drug_find_change, 
                  change: 'expenditureDate', 
                  direction: 'col', 
                }} />
                <DateInput props={{
                  label: 'Sampai', 
                  value: D_drug_find.expenditureDateSec, 
                  onChange: D_drug_find_change, 
                  change: 'expenditureDateSec', 
                  direction: 'col', 
                }} />
            </div> }
            <Button props={{
              label: 'Bersihkan', 
              onClick: D_drug_find_clear, 
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
          <Table props={{
            data: D_drugs, 
            show: [
              'batchNumber', 
              'name', 
              'type', 
              'unit', 
            ], 
            selected: D_drugSelected.data, 
            onClick: D_drugSelected_data_change, 
          }} />
        </div> }
        { (D_drug_option === 'Tambah Obat') && <div className='content'>
          <Title props={{
            title: 'Tambah Obat Baru', 
          }} />
          <TextInput props={{
              label: 'Nama Obat', 
              value: D_drug_add.name, 
              onChange: D_drug_add_change, 
              change: 'name', 
            }} />
            <Select props={{
              label: 'Tipe Obat', 
              options: ['TIPE OBAT', 'KAPSUL', 'KAPLET', 'SIRUP', 'DROPS', 'SALEP', 'TETES', 'KRIM', 'GEL', 'SUPOSITORIA', 'INJEKSI', 'CAIRAN INFUS', 'BMHP'], 
              value: D_drug_add.type, 
              onChange: D_drug_add_change,
              change: 'type', 
            }} />
            <Select props={{
              label: 'Unit Obat', 
              options: ['UNIT OBAT', 'BOTOL', 'BOX', 'ROLL', 'SATCHET'], 
              value: D_drug_add.unit, 
              onChange: D_drug_add_change, 
              change: 'unit', 
            }} />
            <TextInput props={{
              label: 'Nomor Batch', 
              value: D_drug_add.batchNumber, 
              onChange: D_drug_add_change, 
              change: 'batchNumber', 
            }} />
            <Button props={{
              label: 'Bersihkan', 
              onClick: D_drug_add_clear, 
              type: 'quaternary', 
              position: 'right', 
            }} />
            <Gap props={{height: 25}} />
            <Button props={{
              label: 'Tambah Obat Baru', 
              type: 'primary', 
              onClick: D_drug_add_submit, 
            }} />
        </div> }
      </div>
      { (D_drug_option === 'Cari Obat' && D_drugSelected.data !== null) && <div className='content'>
        <Title props={{
          title: D_drugSelected.data.name, 
        }} />
        <ButtonList props={{
          options: ['Data Obat', 'Tambah Pemasukkan', 'Tambah Pengeluaran'], 
          direction: 'row', 
          value: D_drugSelected.option, 
          onClick: D_drugSelected_option_change, 
        }} />
        { D_drugSelected.option !== null && <div>
          <Gap props={{height: 25}} />
          <HorLine />
          <Gap props={{height: 25}} />
          { D_drugSelected.option === 'Data Obat' && <form className='row'>
            <div className='form'>
              <TextInput props={{
                label: 'Nama Obat', 
                value: D_drugSelected_drugData.data.name, 
                onChange: D_drugSelected_drugData_change, 
                change: 'name', 
                disabled: !D_drugSelected_drugData.change, 
              }} />
              <Select props={{
                label: 'Tipe Obat', 
                options: ['TIPE OBAT', 'KAPSUL', 'KAPLET', 'SIRUP', 'DROPS', 'SALEP', 'TETES', 'KRIM', 'GEL', 'SUPOSITORIA', 'INJEKSI', 'CAIRAN INFUS', 'BMHP'], 
                value: D_drugSelected_drugData.data.type, 
                onChange: D_drugSelected_drugData_change, 
                change: 'type', 
                disabled: !D_drugSelected_drugData.change, 
              }} />
            </div>
            <div className='form'>
              <Select props={{
                label: 'Unit', 
                options: ['UNIT OBAT', 'BOTOL', 'BOX', 'ROLL', 'SATCHET'], 
                value: D_drugSelected_drugData.data.unit, 
                onChange: D_drugSelected_drugData_change, 
                change: 'unit', 
                disabled: !D_drugSelected_drugData.change, 
              }} />
              <TextInput props={{
                label: 'Nomor Batch', 
                value: D_drugSelected_drugData.data.batchNumber, 
                onChange: D_drugSelected_drugData_change, 
                change: 'batchNumber', 
                disabled: !D_drugSelected_drugData.change, 
              }} />
              { !D_drugSelected_drugData.change ? 
                <Button props={{
                  label: 'Ubah', 
                  onClick: D_drugSelected_drugData_changeChange, 
                  type: 'tertiary', 
                  position: 'right', 
                }} /> :
                <ButtonList props={{
                  options: ['Simpan Perubahan', 'Batalkan Perubahan'], 
                  onClick: D_drugSelected_drugData_changeChange, 
                  direction: 'row', 
                  align: 'end', 
                }} /> 
              }
            </div>
          </form> }
        </div> }
      </div> }
    </main>
  );
}
