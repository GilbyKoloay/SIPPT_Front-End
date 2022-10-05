// styles
import './styles.css';

export default function ButtonList({ props }) {
  const { options, value, onChange, direction } = props;

  return( 
    <div className={`atom-buttonList ${direction}`}>
      {options.map((o, index) => (
        <div key={index} className={`option${value === o ? '-selected' : ''}`} onClick={() => onChange(o)}>{o}</div>
      ))}
    </div>
  );
}
