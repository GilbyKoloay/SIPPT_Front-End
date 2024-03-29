import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

// styles
import './styles.css';

export default function NotFound() {
  const [timer, setTimer] = useState(5);
  // const [timer, setTimer] = useState(0); // dev

  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => setTimer(timer => timer - 1), 1000);
    (timer === 0) && navigate('/login');
  }, [timer]);

  return(
    <div className='notFound'>
      <h1>Oops!</h1>
      <h3>404 Not Found</h3>
      <h4>Redirecting in {timer}</h4>
    </div>
  );
}
