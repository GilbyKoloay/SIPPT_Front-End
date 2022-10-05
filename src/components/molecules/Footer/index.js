// styles
import './styles.css';

export default function Footer({ props }) {
  const { text } = props;

  return(
    <footer className='footer'>
      <div className='textErrMsg'>{text}</div>
    </footer>
  );
}