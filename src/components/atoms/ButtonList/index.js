// styles
import './styles.css';

export default function ButtonList({ props }) {
  const { options, value, onClick, direction, align } = props;

  return( 
    <div className={`atom-buttonList ${direction && `direction-${direction}`} ${align && `align-${align}`}`}>
      {options.map((o, index) => (
        <div key={index} className={`option${value === o ? '-selected' : ''} textInput`} onClick={() => onClick(o)}>{o}</div>
      ))}
    </div>
  );
}
