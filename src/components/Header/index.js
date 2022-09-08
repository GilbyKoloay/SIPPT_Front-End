// styles
import './styles.css';

export default function Header({ role, name }) {
  return(
    <div className='Header-bg'>
      <div className='Header'>
        <h2>SISTEM INFORMASI PELAYANAN PUSKESMAS TALAWAAN</h2>
        <h3>{ role } - { name }</h3>
      </div>
    </div>
  );
}
