import '../styles.css';

// atoms
import {
  Title,
  Table,
} from '../../atoms';

export default function PemesananObat( {props} ) {

  const {
    patients,
  } = props;

  console.log(props)

    return(
      <main>
        <div className='content'>
        <Title props={{
            title: 'Data pemesanan Obat', 
          }} />
          {/* <div className='textErrMsg' style={{color: 'black'}}>Total pasien ditemukan: <b>{patientsResult ? patientsResult.length : '0'}</b></div> */}
          {/* <Gap props={{height: 15}} /> */}
          <Table props={{
            data: patients, 
            show: [
              'familyCardName', 
              'paymentMethod', 
            ], 
            // selected: D_drugSelected.data, 
            // onClick: D_drugSelected_data_change, 
          }} />
        </div>
        
      </main>
    );
  }
  