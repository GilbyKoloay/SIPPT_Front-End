// styles
import './styles.css';

export default function Select({ props }) {
  const { label, options, value, change, onChange, errMsg, disabled, tab } = props;

  return(
    <div className='atom-select'>
      <div className={`textLabel ${tab && 'tab'}`}>{label}</div>
      <div className='input'>
        <select className={`${(value !== '') ? 'selected' : ''} textInput ${disabled ? 'disabled' : ''}`} value={value} onChange={e => onChange(change, e.target.value)} disabled={disabled}>
          {options.map((o, index) => (
            <option key={index} value={(index === 0) ? '' : o} disabled={(index === 0)}>{o}</option>
          ))}
        </select>
        {/* <div className='textErrMsg'>error messages</div> */}
        <div className='textErrMsg'>{errMsg}</div>
      </div>
    </div>
  );
}
