import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// pages
import {
  Login,
  Loket,
  NotFound,
} from './pages';

export default function App() {
  const [__token, __setToken] = useState(null);

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/login' element={<Login props={ { __setToken } } />} />
          <Route path='/loket' element={<Loket props={ { __token } } />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
