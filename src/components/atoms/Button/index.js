// styles
import './styles.css';

export default function Button({ props }) {
  const { title, onClick } = props;

  return( 
    <div className='atom-button-selected' onClick={() => onClick()}>
      <div className='textInput'>{title}</div>
    </div>
  );
}
