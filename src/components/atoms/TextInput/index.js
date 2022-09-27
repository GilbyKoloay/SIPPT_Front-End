// styles
import './styles.css';

export default function TextInput({ props }) {
  const { title } = props;

  return(
    <div className='TextInput textTitle'>{title}</div>
  );
}
