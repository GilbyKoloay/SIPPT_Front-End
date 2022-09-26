import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

// styles
import './styles.css';

// images
import { KabMinut } from '../../assets/images';

export default function Login() {
  const [username, setUsername] = useState('');
  const [usernameErr, setUsernameErr] = useState(false);
  const [password, setPassword] = useState('');
  const [passwordErr, setPasswordErr] = useState(false);
  const [errMsg, setErrMsg] = useState('');
  const [user, setUser] = useState(null);

  const navigate = useNavigate();

  const signInOnClick = async (e) => {
    e.preventDefault();

    const req = await fetch('http://localhost:4000/api/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        username,
        password,
      }),
    });
    const res = await req.json();

    if(res.status === 'success') {
      setErrMsg('');
      setUsername('');
      setPassword('');
      setUsernameErr(false);
      setPasswordErr(false);
      setUser(res.data);
      
      (res.data.role) === 'ADMINISTRATOR' && navigate('/administrator', {state: user});
      (res.data.role) === 'LOKET' && navigate('/loket', {state: user});
      (res.data.role) === 'POLI UMUM' && navigate('/poliUmum', {state: user});
      (res.data.role) === 'POLI GIGI' && navigate('/poliGigi', {state: user});
      (res.data.role) === 'POLI KIA' && navigate('/poliKIA', {state: user});
      (res.data.role) === 'APOTEK' && navigate('/apotek', {state: user});
    }
    if(res.status === 'error') {
      setErrMsg(res.msg);
      setUsernameErr((res.msg === 'Nama pengguna tidak ditemukan') ? true : false);
      setPasswordErr((res.msg === 'Kata sandi salah') ? true : false);
    }
  };

  return(
    <div className='login-bg'>
      <div className='login'>
        <div className='box'>
          <div className='left'>
            <div className='title'>
              <div className='textTitle'>Sistem Informasi Pelayanan</div>
              <div className='textTitle'>Puskesmas Talawaan</div>
            </div>
            <div className='icons'>
              <img className='icon' src={KabMinut} alt="Logo Kab. Minut" />
            </div>
          </div>
          <form className='right'>
            <div className='input'>
              <div className='textLabel'>Nama Pengguna</div>
              <input className={`textInput${usernameErr ? ' inputTextErr' : ''}`} onChange={e => setUsername(e.target.value)} />
            </div>
            <div className='input'>
              <div className='textLabel'>Kata Sandi</div>
              <input className={`textInput${passwordErr ? ' inputTextErr' : ''}`} onChange={e => setPassword(e.target.value)} />
            </div>
            <div className='textErrMsg'>{errMsg}</div>
            <button className='textInput' onClick={e => signInOnClick(e)}>Masuk</button>
          </form>
        </div>
      </div>
    </div>
  );
}
