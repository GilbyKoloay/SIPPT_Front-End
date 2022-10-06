// styles
import './styles.css';

export default function DateInput({ props }) {
  const { label, value, change, onChange, errMsg, direction } = props;

  return(
    <div className={`atom-dateInput ${direction}`}>
      <div className='textLabel'>{label}</div>
      <div className='input'>
        <div>
          <input type='text' className='date textInput' value={value.date} onChange={e => onChange([change, 'date'], e.target.value)} placeholder='TGL' />
          <select className={`month${value.month !== '' ? '-selected' : ''} textInput`} value={value.month} onChange={e => onChange([change, 'month'], e.target.value)}>
            <option value='' disabled>{`(BULAN)`}</option>
            <option value={1}>1 / JANUARI</option>
            <option value={2}>2 / FEBRUARI</option>
            <option value={3}>3 / MARET</option>
            <option value={4}>4 / APRIL</option>
            <option value={5}>5 / MEI</option>
            <option value={6}>6 / JUNI</option>
            <option value={7}>7 / JULI</option>
            <option value={8}>8 / AGUSTUS</option>
            <option value={9}>9 / SEPTEMBER</option>
            <option value={10}>10 / OKTOBER</option>
            <option value={11}>11 / NOVEMBER</option>
            <option value={12}>12 / DESEMBER</option>
          </select>
          <input type='text' className='year textInput' value={value.year} onChange={e => onChange([change, 'year'], e.target.value)} placeholder='TAHUN' />
        </div>
        {/* <div className='textErrMsg'>error message</div> */}
        <div className='textErrMsg'>{errMsg}</div>
      </div>
    </div>
  );
}
