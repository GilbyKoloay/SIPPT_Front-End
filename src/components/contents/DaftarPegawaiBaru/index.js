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

  const {
    D_Employee,
    D_employee_add,
    CreateNewEmployee,
    D_empl_add_change
  } = props;

    return(
      <main>
        <div className='container'>
          <div className='content'>
            <Title props={{title: 'Form Daftar'}} />
            
            <TextInput props={{
              label : 'Nama Lengkap',
              value: D_employee_add.name, 
              change : 'name',
              onChange: D_empl_add_change, 
            }} />
            
            <TextInput props={{
              label : 'Username',
              value: D_employee_add.username,
              change : 'username',
              onChange: D_empl_add_change, 
            }} />
            
            <TextInput props={{
              label : 'Password',
              value: D_employee_add.password,
              onChange: D_empl_add_change, 

              change : 'password'
            }} />

            <Select props={ {
              label : 'Jabatan',
              value: D_employee_add.role,
              onChange: D_empl_add_change, 
              change: "role",
              options : [ 'Pilih Jabatan', 'ADMINISTRATOR', 'LOKET', 'POLI UMUM', 'POLI GIGI', 'POLI KIA', 'APOTEK' ],
            } } />

            <Button props={ {
              label: 'Tambah Pegawai Baru',
              type: 'primary',
              onChange: D_empl_add_change, 
              onClick: CreateNewEmployee, 
            }}/>

          </div>

          <div className='content'>
          <Title props={{title: 'Data Pegawai'}} />

          <Table props={{
            data: D_Employee,
            show: [
              'name',
              'username',
              'role'
            ]
          }}/>

          </div>

        </div>
      </main>
    );
  }
  