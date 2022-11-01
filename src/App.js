import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// pages
import {
  Login,
  Administrator,
  Loket,
  Poli,
  Apotek,
  NotFound,
} from './pages';

export default function App() {
  const [__user, __setUser] = useState(null);
  // google 'useState value disappear when refreshing page'

  useEffect(() => {
    // console.log(`__user`, __user);
  }, [__user]);

  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route path='/login' element={<Login props={{__setUser}} />} />
          <Route path='/administrator' element={__user ? <Administrator props={{__user}} /> : <NotFound />} />
          <Route path='/loket' element={__user ? <Loket props={{__user}} /> : <NotFound />} />
          <Route path='/poli' element={__user ? <Poli props={{__user}} /> : <NotFound />} />
          <Route path='/apotek' element={__user ? <Apotek props={{__user}} /> : <NotFound />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
