// styles
import './styles.css';

export default function TextInput({ props }) {
  const { label, value, change, onChange, errMsg, disabled } = props;

  return(
    <div className='atom-textInput'>
      <div className='textLabel'>{label}</div>
      <div className='input'>
        <input type='text' className={`textInput`} value={value} onChange={e => onChange(change, e.target.value.toUpperCase())} disabled={disabled} />
        {/* <div className='textErrMsg'>lorem ipsum dolor sit amet consectetur adispicing elit</div> */}
        <div className='textErrMsg'>{errMsg}</div>
      </div>
    </div>
  );
}
