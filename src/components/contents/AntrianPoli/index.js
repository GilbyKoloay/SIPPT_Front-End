import React, {useState} from 'react';
// import { Button } from '../../atoms';
import '../styles.css';

export default function AntrianPoli() {
  
  const [count, setCount] = useState(0);
  return(
    <main>
      <div className='content'>
        <center>

        <div className='row my-5'>

          <div className='card text-center my-5'>
            
            <div className='content'>
              <h1> Antrian Poli Umum </h1>
              <div className='my-5'>
                <h1 className='my-5'>{count}</h1>

                {/* <Button props={{
                  label:'Ambil Antrian',
                  onClick: setCount(count + 1)
                }} /> */}
               
                <button className='btn btn-success mx-3' onClick={() => setCount(count + 1)}> Ambil Antrian </button>
                <button className='btn btn-secondary mx-3' onClick={() => setCount(0)}>Reset</button>
              </div>
            </div>

            <div className='content'>
              <h1> Antrian Poli KIA </h1>
              <div className='my-5'>
                <h1 className='my-5'>{count}</h1>
                <button className='btn btn-success mx-' onClick={() => setCount(count + 1)}> Ambil Antrian </button>
                <button className='btn btn-secondary mx-3' onClick={() => setCount(0)}>Reset</button>
              </div>
            </div>

            <div className='content'>
              <h1> Antrian Poli Gigi </h1>
              <div className='my-5'>
                <h1 className='my-5'>{count}</h1>
                <button className='btn btn-success mx-3' onClick={() => setCount(count + 1)}> Ambil Antrian </button>
                <button className='btn btn-secondary mx-3' onClick={() => setCount(0)}>Reset</button>
              </div>
            </div>
          </div>
        </div>

        </center>
        
      </div>
        

    </main>
    
  );
}
