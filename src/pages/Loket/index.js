import { useState } from 'react';

// styles
import './styles.css';

// components
import { Header } from '../../components';

export default function Loket() {
  return(
    <div className='Loket'>
      <Header props={{ role: 'LOKET', name: 'telor' }} />
      <h1>Loket Page</h1>
    </div>
  );
}
