import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// pages
import { Login } from './pages';

export default function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route path='/login' element={ <Login /> } />
          {/* <Route path='*' element= */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}
