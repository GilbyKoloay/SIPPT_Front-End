// styles
import './styles.css';

export default function Header({ props }) {
  const { name, role } = props;

  return(
    <header className='header-bg'>
      <div className='header'>
        <div className='textTitle'>SISTEM INFORMASI PELAYANAN PUSKESMAS TALAWAAN</div>
        <div className='textLabel'>{role} - {name}</div>
      </div>
    </header>
  );
}
