import React from 'react';
import { Button } from '../../atoms';

export default function AntrianPoli() {
  
  
  return(
    <main>
      <div className='content'>
      
       <Button props={{
          label:'Cetak Antrian Poli Umum',
          type:'primary',
        }} />
      
      <br />
      <Button props={{
          label:'Cetak Antrian Poli Anak',
          type:'primary',
        }} />
        
      <br />
      <Button props={{
          label:'Cetak Antrian Poli Gigi',
          type:'primary',
        }} />
      
      </div>
    </main>
  );
}
