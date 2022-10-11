// styles
import './styles.css';

export default function TextAreaInput({ props }) {
  const { label, value, change, onChange, errMsg, disabled } = props;

  return(
    <div className='atom-textAreaInput'>
      <div className='textLabel'>{label}</div>
      <div className='input'>
        <textarea className={`textInput ${disabled ? 'disabled' : ''}`} value={value} onChange={e => onChange(change, e.target.value.toUpperCase())} disabled={disabled} />
        {/* <div className='textErrMsg'>error messages</div> */}
        <div className='textErrMsg'>{errMsg}</div>
      </div>
    </div>
  );
}
