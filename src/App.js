import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// pages
import {
  Login,
  Loket,
  NotFound,
} from './pages';

export default function App() {
  const [__user, __setUser] = useState(null);
  // google 'useState value disappear when refreshing page'

  return (
    <div className='App'>
      <BrowserRouter>
      {console.log(__user)}
        <Routes>
          {(console.log(__user ? true : false))}
          <Route path='/login' element={<Login props={{__setUser}} />} />
          <Route path='/loket' element={__user ? <Loket props={{__user}} /> : <NotFound />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
