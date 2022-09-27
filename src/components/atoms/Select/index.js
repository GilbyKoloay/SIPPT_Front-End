// styles
import './styles.css';

export default function Select({ props }) {
  const { label, errMsg } = props;

  return(
    <div className='Select'>
      <div className='textLabel'>{label}</div>
      <div className='input'>
        <select className='textInput' />
        <div className='textErrMsg'>{errMsg}error messages</div>
      </div>
    </div>
  );
}
