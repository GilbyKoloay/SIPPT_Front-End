// styles
import './styles.css';

export default function Header({ role, name }) {
  return(
    <div className='header-bg'>
      <header className='header'>
        <h1>SISTEM INFORMASI PELAYANAN PUSKESMAS TALAWAAN</h1>
        <h2>{ role } - { name }</h2>
      </header>
    </div>
  );
}
