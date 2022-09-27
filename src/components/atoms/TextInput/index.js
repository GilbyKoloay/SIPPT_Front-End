// styles
import './styles.css';

export default function TextInput({ props }) {
  const { label, errMsg, disabled } = props;

  return(
    <div className='TextInput'>
      <div className='textLabel'>{label}</div>
      <div className='input'>
        <input type='text' className={`textInputt${disabled ? '-disabled' : ''} textInput`} disabled={disabled} />
        <div className='textErrMsg'>{errMsg}lorem ipsum dolor sit amet consectetur adispicing elit</div>
      </div>
    </div>
  );
}
