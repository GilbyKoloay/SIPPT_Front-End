// styles
import './styles.css';

export default function ButtonClear({ props }) {
  const { label } = props;

  return(
    <div className='buttonClear'>
      <button className='textInput'>{label}</button>
    </div>
  );
}
