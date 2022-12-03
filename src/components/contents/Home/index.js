import React from 'react';

export default function Home({props}) {
  const {name, role}=props;
  return(
    <main>
      <div className='content'>
      
       <h1>Halo Selamat Datang {name} Sebagai {role} </h1>
      
      </div>
    </main>
  );
}
