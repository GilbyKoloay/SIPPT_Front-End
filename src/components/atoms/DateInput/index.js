// styles
import './styles.css';

export default function DateInput({ props }) {
  const { label, errMsg } = props;

  return(
    <div className='atom-dateInput'>
      <div className='textLabel'>{label}</div>
      <div className='input'>
        <div>
          <input type='text' className='date textInput' placeholder='TGL' />
          <select className='month textInput'>
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
          <input type='text' className='year textInput' placeholder='TAHUN' />
        </div>
        {/* <div className='textErrMsg'>error message</div> */}
        <div className='textErrMsg'>{errMsg}</div>
      </div>
    </div>
  );
}
