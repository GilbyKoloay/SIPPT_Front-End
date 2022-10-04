// styles
import './styles.css';

export default function TextInput({ props }) {
  const { label, errMsg, disabled } = props;

  return(
    <div className='atom-textInput'>
      <div className='textLabel'>{label}</div>
      <div className='input'>
        <input type='text' className={`textInput`} disabled={disabled} />
        {/* <div className='textErrMsg'>lorem ipsum dolor sit amet consectetur adispicing elit</div> */}
        <div className='textErrMsg'>{errMsg}</div>
      </div>
    </div>
  );
}
