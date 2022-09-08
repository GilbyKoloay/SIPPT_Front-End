import { useState } from 'react';

// styles
import './styles.css';

// components
import { Header, Dashboard } from '../../components';

export default function Loket() {
  return(
    <div className='Loket'>
      <Header props={{ role: 'LOKET', name: 'telor' }} />
      <div className='Dashboard-Content'>
        <Dashboard />
        <div className='Content'>Content</div>
      </div>
      <div className='Footer'>Footer</div>
    </div>
  );
}
