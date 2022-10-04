// styles
import './styles.css';

export default function Select({ props }) {
  const { label, errMsg, tab, values } = props;

  return(
    <div className='atom-select'>
      <div className={`textLabel ${tab && 'tab'}`}>{label}</div>
      <div className='input'>
        {/* <select className={`textInput ${'err'}`}> */}
        <select className={`textInput`}>
          {values.map((v, index) => (
            <option key={index} value={v} disabled={(index === 0)}>{v}</option>
          ))}
        </select>
        {/* <div className='textErrMsg'>error messages</div> */}
        <div className='textErrMsg'>{errMsg}</div>
      </div>
    </div>
  );
}
