import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

// styles
import './styles.css';

// pages
import {
  Loket,
} from '../index';

export default function Login() {
  const [username, setUsername] = useState('');
  const [usernameErr, setUsernameErr] = useState(false);
  const [password, setPassword] = useState('');
  const [passwordErr, setPasswordErr] = useState(false);
  const [errMsg, setErrMsg] = useState('');
  const navigate = useNavigate();

  const LoginOnClick = async (e) => {
    e.preventDefault();
    
    // const res = await fetch(`${process.env.REACT_APP_API}/login`, {
    const res = await fetch(`http://localhost:4000/api/login`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        username,
        password,
      }),
    });
    const json = await res.json();

    setUsernameErr(json.msg === `Nama Pengguna tidak ditemukan` ? true : false);
    setPasswordErr(json.msg === `Kata Sandi salah` ? true : false);

    if(json.status === `success`) {
      setErrMsg('');

      (json.data.role === 'LOKET') && navigate('/loket');
    }
    else {
      setErrMsg(json.msg);
    }
  };

  return(
    <div className='Login-bg'>
      <div className='Login'>
        <div className='box'>
          <div className='title'>
            <h1>Sistem Informasi Pelayanan</h1>
            <h1>Puskesmas Talawaan</h1>
            <div className='icons'>

            </div>
          </div>
          <div className='form'>
            <form>
              <div className='input'>
                <h2>Nama Pengguna</h2>
                <input 
                  className={usernameErr ? 'input-err' : 'input'} 
                  type='text' 
                  value={username} 
                  onChange={(e) => setUsername(e.target.value)} 
                />
              </div>

              <div className='input'>
                <h2 >Kata Sandi</h2>
                <input 
                  className={passwordErr ? 'input-err' : 'input'} 
                  type='password' 
                  value={password} 
                  onChange={(e) => setPassword(e.target.value)} 
                />
              </div>

              <h4 className='err-msg'>{errMsg}</h4>

              <button onClick={(e) => LoginOnClick(e)}>Masuk</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
