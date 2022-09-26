import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// pages
import {
  Login,
  Loket,
  NotFound,
} from './pages';

export default function App() {
  const [__user, __setUser] = useState(null);

  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route path='/login' element={<Login props={{__setUser}} />} />
          <Route path='/loket' element={__user ? <Loket props={{__user}} /> : <NotFound />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
