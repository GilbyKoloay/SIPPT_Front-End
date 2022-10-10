// styles
import './styles.css';

export default function Button({ props }) {
  const { label, onClick, type, position='full' } = props;

  return(
    <div className={`atom-button position-${position !== 'full' ? position : ''}`}>
      <button className={`textInput ${type ? `type-${type}` : ''} position-${position === 'full' && 'full'}`} onClick={e => onClick(e)}>{label}</button>
    </div>
  );
}
