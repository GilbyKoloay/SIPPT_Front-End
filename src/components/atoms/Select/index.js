// styles
import './styles.css';

export default function Select({ props }) {
  const { label, errMsg, tab, options } = props;

  return(
    <div className='atom-select'>
      <div className={`textLabel ${tab && 'tab'}`}>{label}</div>
      <div className='input'>
        {/* <select className={`textInput ${'err'}`}> */}
        <select className={`textInput`} value={options[0]}>
          {options.map((o, index) => (
            <option key={index} value={o} disabled={(index === 0)}>{o}</option>
          ))}
        </select>
        {/* <div className='textErrMsg'>error messages</div> */}
        <div className='textErrMsg'>{errMsg}</div>
      </div>
    </div>
  );
}