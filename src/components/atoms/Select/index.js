// styles
import './styles.css';

export default function Select({ props }) {
  const { label, errMsg, tab } = props;

  return(
    <div className='atom-select'>
      <div className={`textLabel ${tab && 'tab'}`}>{label}</div>
      <div className='input'>
        {/* <select className={`textInput ${'err'}`}> */}
        <select className={`textInput`}>
          <option value='test'>option 1</option>
          <option value='test'>option 2</option>
          <option value='test'>option 3</option>
        </select>
        {/* <div className='textErrMsg'>error messages</div> */}
        <div className='textErrMsg'>{errMsg}</div>
      </div>
    </div>
  );
}
