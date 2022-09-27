// styles
import './styles.css';

export default function Title({ props }) {
  const { title } = props;

  return(
    <div className='Title textTitle'>{title}</div>
  );
}
