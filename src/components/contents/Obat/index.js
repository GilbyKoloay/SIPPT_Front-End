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
    D_drugSelected_addReceive, D_drugSelected_addReceive_change, D_drugSelected_addReceive_submit,
    D_drugSelected_addExpenditure, D_drugSelected_addExpenditure_selectReceive, D_drugSelected_addExpenditure_change, D_drugSelected_addExpenditure_submit,
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
            <RadioButton props={{
              label: 'Tanggal Kadaluarsa', 
              options: ['Sama dengan', 'Dari / Sampai'], 
              value: D_drug_find.expireDateOption, 
              onChange: D_drug_find_change, 
              change: 'expireDateOption', 
            }} />
            { (D_drug_find.expireDateOption === 'Sama dengan') ? <div>
              <DateInput props={{
                label: 'Sama dengan', 
                value: D_drug_find.expireDate, 
                onChange: D_drug_find_change, 
                change: 'expireDate', 
                direction: 'col', 
              }} />
              </div> : (D_drug_find.expireDateOption === 'Dari / Sampai') && <div>
                <DateInput props={{
                  label: 'Dari', 
                  value: D_drug_find.expireDate, 
                  onChange: D_drug_find_change, 
                  change: 'expireDate', 
                  direction: 'col', 
                }} />
                <DateInput props={{
                  label: 'Sampai', 
                  value: D_drug_find.expireDateSec, 
                  onChange: D_drug_find_change, 
                  change: 'expireDateSec', 
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
          options: ['Data Obat', 'Tambah Pemasukkan', 'Tambah Pengeluaran', 'Hapus Obat'], 
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
          { D_drugSelected.option === 'Tambah Pemasukkan' && <div>
            { D_drugSelected.data.drug.length > 0 ? <div>
              <div className='textLabel'>Daftar Pemasukkan Obat</div>
              <Gap props={{height: 15}} />
              <Table props={{
                data: D_drugSelected.data.drug, 
                show: [
                  'receiveDate', 
                  'expireDate', 
                  'receiveTotal', 
                ], 
              }} />
            </div> : <div className='textLabel'>
              Belum pernah dilakukan pemasukkan pada obat ini.
            </div>}
            <Gap props={{height: 25}} />
            <HorLine />
            <Gap props={{height: 25}} />
            <form className='row'>
              <div className='form'>
                <TextInput props={{
                  label: 'Jumlah Pemasukkan', 
                  value: D_drugSelected_addReceive.receiveTotal, 
                  onChange: D_drugSelected_addReceive_change, 
                  change: 'receiveTotal', 
                }} />
              </div>
              <div className='form'>
                <DateInput props={{
                  label: 'Tanggal Pemasukkan', 
                  value: D_drugSelected_addReceive.receiveDate, 
                  onChange: D_drugSelected_addReceive_change, 
                  change: 'receiveDate', 
                }} />
                <DateInput props={{
                  label: 'Tanggal Kadalursa', 
                  value: D_drugSelected_addReceive.expireDate, 
                  onChange: D_drugSelected_addReceive_change, 
                  change: 'expireDate', 
                }} />
              </div>
            </form>
            <Gap props={{height: 10}} />
            <Button props={{
              label: 'Tambah Pemasukkan Obat', 
              onClick: D_drugSelected_addReceive_submit, 
              type: 'primary', 
            }} />
          </div> }
          { D_drugSelected.option === 'Tambah Pengeluaran' && <div>
            { D_drugSelected.data.drug.length > 0 ? <div>
              <form className='row'>
                <div className='form'>
                  <div className='textLabel'>Daftar Pemasukkan Obat</div>
                  <Gap props={{height: 15}} />
                  <Table props={{
                    data: D_drugSelected.data.drug, 
                    show: [
                      'receiveDate', 
                      'expireDate', 
                      'receiveTotal', 
                    ], 
                    selected: D_drugSelected_addExpenditure.selectedReceive, 
                    onClick: D_drugSelected_addExpenditure_selectReceive, 
                  }} />
                </div>
                <div className='form'>
                  <div className='textLabel'>Daftar Pengeluaran Obat</div>
                  <Gap props={{height: 15}} />
                  { D_drugSelected_addExpenditure.selectedReceive !== null && D_drugSelected_addExpenditure.selectedReceive.expenditure.length > 0 ? <Table props={{
                    data: D_drugSelected_addExpenditure.selectedReceive.expenditure, 
                    show: [
                      'expenditureDate', 
                      'expenditureTotal', 
                    ], 
                  }} /> : <div className='textLabel'>{ D_drugSelected_addExpenditure.selectedReceive === null ? 
                    `Silahkan memilih daftar pemasukkan obat terlebih dahulu.` : 
                    `Belum pernah dilakukan pengeluaran pada obat yang dimasukkan pada ${D_drugSelected_addExpenditure.selectedReceive.receiveDate}.`
                  }</div> }
                </div>
              </form>
              <Gap props={{height: 25}} />
              <HorLine />
              <Gap props={{height: 25}} />
              { D_drugSelected_addExpenditure.selectedReceive !== null ? <div>
                <form className='row'>
                  <div className='form'>
                    <TextInput props={{
                      label: 'Jumlah Pengeluaran', 
                      value: D_drugSelected_addExpenditure.expenditureTotal, 
                      onChange: D_drugSelected_addExpenditure_change, 
                      change: 'expenditureTotal', 
                    }} />
                  </div>
                  <div className='form'>
                    <DateInput props={{
                      label: 'Tanggal Pengeluaran', 
                      value: D_drugSelected_addExpenditure.expenditureDate, 
                      onChange: D_drugSelected_addExpenditure_change, 
                      change: 'expenditureDate', 
                    }} />
                  </div>
                </form>
                <Button props={{
                  label: 'Tambah Pengeluaran Obat', 
                  onClick: D_drugSelected_addExpenditure_submit, 
                  type: 'primary', 
                }} />
              </div> : <div className='textLabel'>
                Silahkan memilih daftar pemasukkan obat terlebih dahulu.
              </div> }
            </div> : <div className='textLabel'>
              Belum ada pemasukkan di obat ini. Silahkan menambahkan pemasukkan obat terlebih dahulu.
            </div> }
          </div> }
        </div> }
      </div> }
    </main>
  );
}
