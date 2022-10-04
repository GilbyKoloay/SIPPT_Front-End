// styles
import './styles.css';

export default function RadioButton({props}) {
  const { label, errMsg, options } = props;

  return(
    <div className='atom-radioButton'>
      <div className='textLabel'>{label}</div>
      <div className='input'>
        <div className='options'>
          {options.map(o => (
            <div className='option'>
              <div className='optionCircle' />
              <div className='textInput'>{o}</div>
            </div>
          ))}
          {/* <div className='option-selected'>
            <div className='optionCircle' />
            <div className='textInput'>one</div>
          </div>
          <div className='option'>
            <div className='optionCircle' />
            <div className='textInput'>two</div>
          </div> */}
        </div>
        <div className='textErrMsg'>test</div>
      </div>
    </div>
  );
}
