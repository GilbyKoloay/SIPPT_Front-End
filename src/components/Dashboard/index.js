import { useNavigate } from 'react-router-dom';

// styles
import './styles.css';

export default function Dashboard({ contents, onClick }) {
  const navigate = useNavigate();

  const LogoutOnClick = () => {
    navigate('/login');
  };

  return(
    <div className='Dashboard'>
      <div className='Items'>
        <div className='Title' onClick={e => onClick(e.target.textContent)}>Dasbor</div>
        {contents && contents.map((c, index) => (
          <div 
            key={index} 
            className='Item' 
            onClick={e => onClick(e.target.textContent)}
          >
            {c}
          </div>
        ))}
      </div>
      <div className='Logout' onClick={() => LogoutOnClick()}>Keluar</div>
    </div>
  );
}
