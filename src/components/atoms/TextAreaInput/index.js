// styles
import './styles.css';

export default function TextAreaInput({ props }) {
  const { label, errMsg } = props;

  return(
    <div className='atom-textAreaInput'>
      <div className='textLabel'>{label}</div>
      <div className='input'>
        <textarea className='textInput'></textarea>
        {/* <div className='textErrMsg'>error messages</div> */}
        <div className='textErrMsg'>{errMsg}</div>
      </div>
    </div>
  );
}
