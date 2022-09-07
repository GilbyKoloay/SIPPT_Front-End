import { BrowserRouter, Routes, Route } from 'react-router-dom';

// pages
import {
  Login,
  Loket,
} from './pages';

export default function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/loket' element={<Loket />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
