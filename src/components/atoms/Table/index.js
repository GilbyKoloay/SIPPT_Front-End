// styles
import './styles.css';

export default function Table({ props }) {
  const widths = {
    'No. Rekam Medis': '150px',
    'Nama': '250px',
  };

  const { titles, data } = props;

  return(
    <div className='atom-table'>
      <div className='row title'>
        {titles.map((t, index) => (
          <div key={index} className='textErrMsg' style={{width: widths[t]}}>{t}</div>
        ))}
      </div>
      {data.map((d, index) => (
        <div key={index} className='row'>
          <div style={{width: widths['No. Rekam Medis']}}>{d.medicalRecordNumber}</div>
          <div style={{width: widths['Nama']}}>{d.name}</div>
        </div>
      ))}
    </div>
  );
}
