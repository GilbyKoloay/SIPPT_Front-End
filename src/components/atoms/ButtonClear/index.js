// styles
import './styles.css';

export default function ButtonClear({ props }) {
  const { onClick } = props;

  return(
    <div className='atom-buttonClear' onClick={() => onClick()}>
      <button className='textInput'>Bersihkan</button>
    </div>
  );
}
