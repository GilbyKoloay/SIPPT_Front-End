import { useState } from 'react';

// styles
import './styles.css';

export default function Login() {
  const [username, setUsername] = useState('');
  const [usernameErr, setUsernameErr] = useState(false);
  const [password, setPassword] = useState('');
  const [passwordErr, setPasswordErr] = useState(false);
  const [errMsg, setErrMsg] = useState('');

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
    console.log(`json`, json);

    setUsernameErr(json.msg === `Nama Pengguna tidak ditemukan` ? true : false);
    setPasswordErr(json.msg === `Kata Sandi salah` ? true : false);

    if(json.status === `success`) {
      setErrMsg('');
    }
    else {
      setErrMsg(json.msg);
    }
  };

  return(
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
              <label >Nama Pengguna</label>
              <input 
                className={usernameErr ? 'input-err' : 'input'} 
                type='text' 
                value={username} 
                onChange={(e) => setUsername(e.target.value)} 
              />
            </div>

            <div className='input'>
              <label >Kata Sandi</label>
              <input 
                className={passwordErr ? 'input-err' : 'input'} 
                type='password' 
                value={password} 
                onChange={(e) => setPassword(e.target.value)} 
              />
            </div>

            <div className='err-msg'>{errMsg}</div>

            <button onClick={(e) => LoginOnClick(e)}>Masuk</button>
          </form>
        </div>
      </div>
    </div>
  );
}
