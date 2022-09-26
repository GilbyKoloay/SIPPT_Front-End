import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

// styles
import './styles.css';

export default function NotFound() {
  const navigate = useNavigate();
  const [timer, setTimer] = useState(5);

  useEffect(() => {
    setTimeout(() => setTimer(timer => timer - 1), 1000);
    if(timer === 0) {
      navigate('/login');
    }
  }, [timer]);

  return(
    <div className='notFound'>
      <h1>Oops!</h1>
      <h3>404 Not Found</h3>
      <h4>Redirecting in { timer }</h4>
    </div>
  );
}
