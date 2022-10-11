// styles
import './styles.css';

export default function RadioButton({ props }) {
  const { label, options, value, change, onChange, errMsg, disabled } = props;

  return(
    <div className='atom-radioButton'>
      <div className='textLabel'>{label}</div>
      <div className='input'>
        <div className='options'>
          {options.map((o, index) => (
            <div key={index} className={`option${(value === o) ? '-selected' : ''} ${disabled ? 'disabled' : ''}`} onClick={disabled ? null : () => onChange(change, o)}>
              <div className='optionCircle' />
              <div className='textInput'>{o}</div>
            </div>
          ))}
        </div>
        {/* <div className='textErrMsg'>test</div> */}
        <div className='textErrMsg'>{errMsg}</div>
      </div>
    </div>
  );
}
