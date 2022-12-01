import {useState, useEffect} from 'react';
import '../styles.css';

import { 
  Button,
  Select,
  Table,
  TextInput,
  Title,
 } from "../../atoms";


export default function DaftarPegawaiBaru( {props}) {
    return(
      <main>
        <div className='container'>
          <div className='content'>
            <Title props={{title: 'Form Daftar'}} />
            
            <TextInput props={{
              label : 'Nama Lengkap',
              change : 'name'
            }} />
            
            <TextInput props={{
              label : 'Username',
              change : 'username'
            }} />
            
            <TextInput props={{
              label : 'Password',
              change : 'password'
            }} />

            <Select props={ {
              label : 'Jabatan',
              options : [ 'Pilih Jabatan', 'ADMINISTRATOR', 'APOTEKER' ],
            } } />

            <Button props={ {
              label: 'Tambah Pegawai Baru',
              type: 'primary'
            }}/>

          </div>

          <div className='content'>
          <Title props={{title: 'Data Pegawai'}} />

          {/* <Table props={{
            data:{show:'Nama Pegawai', value:'Adi'},
            show: [
              'Nama Pegawai',
              'Username',
              'Jabatan'
            ]
          }}/> */}

          </div>

        </div>
      </main>
    );
  }
  