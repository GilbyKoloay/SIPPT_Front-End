// styles
import './styles.css';

export default function Header({ role, name }) {
  return(
    <div className='header-bg'>
      <header className='header'>
        <h2>SISTEM INFORMASI PELAYANAN PUSKESMAS TALAWAAN</h2>
        <h3>{ role } - { name }</h3>
      </header>
    </div>
  );
}
