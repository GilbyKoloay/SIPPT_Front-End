// styles
import './styles.css';

export default function Header({ props }) {
  return(
    <div className='Header-bg'>
      <div className='Header'>
        <h1>SISTEM INFORMASI PELAYANAN PUSKESMAS TALAWAAN</h1>
        <h2>{ props.role } - { props.name }</h2>
      </div>
    </div>
  );
}
