import { BrowserRouter, Routes, Route } from 'react-router-dom';

// pages
import {
  Login,
  Loket,
  NotFound,
} from './pages';

export default function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/login' element={<Login />} />
          <Route path='/loket' element={<Loket />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
