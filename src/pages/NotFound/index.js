import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

// styles
import './styles.css';

export default function NotFound() {
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => navigate('/login'), 5000);
  });

  return(
    <div className='NotFound'>
      <h1>Oops!</h1>
      <h3>404 Not Found</h3>
    </div>
  );
}
