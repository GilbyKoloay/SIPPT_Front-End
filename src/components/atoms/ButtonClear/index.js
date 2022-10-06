// styles
import './styles.css';

export default function ButtonClear({ props }) {
  const { onClick } = props;

  return(
    <div className='atom-buttonClear' onClick={e => onClick(e)}>
      <button className='textInput'>Bersihkan</button>
    </div>
  );
}
