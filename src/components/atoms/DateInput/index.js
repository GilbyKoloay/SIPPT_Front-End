// styles
import './styles.css';

export default function DateInput({ props }) {
  const { label } = props;

  return(
    <div className='DateInput'>
      <div className='textLabel'>{label}</div>
      <div className='input'>
        <div>
          <input type='text' className='date textInput' placeholder='TGL' />
          <select className='month textInput' />
          <input type='text' className='year textInput' placeholder='TAHUN' />
        </div>
        <div className='textErrMsg'>error message</div>
      </div>
    </div>
  );
}
