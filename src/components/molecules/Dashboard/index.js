import { useNavigate } from 'react-router-dom';

// styles
import './styles.css';

export default function Dashboard({ __setToken, contents, onClick, }) {
  const navigate = useNavigate();

  const LogoutOnClick = () => {
    __setToken(null);
    navigate('/login');
  };

  return(
    <nav className='dashboard'>
      <div className='items'>
        {/* <div className='title' onClick={e => onClick(e.target.textContent)}>Dasbor</div> */}
        {contents && contents.map((c, index) => (
          <div 
            key={index} 
            className={c.selected ? 'item-selected' : 'item'} 
            onClick={e => onClick(e.target.textContent)}
          >
            {c.name}
          </div>
        ))}
      </div>
      <div className='logout' onClick={() => LogoutOnClick()}>Keluar</div>
    </nav>
  );
}
