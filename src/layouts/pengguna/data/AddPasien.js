import MDBox from "components/MDBox";
import MDInput from "components/MDInput";
// import MDTypography from "components/MDTypography";
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import * as React from 'react';
import MDButton from "components/MDButton";
// import Checkbox from "@mui/material/Checkbox";

function AddPasien() {

  const [statusKawin,sKawin] = React.useState('');

  const handleChange = (event) => {
    sKawin(event.target.value);
  };

   
  return (
        
        <MDBox component="form" role="form">
          
         
          <MDBox mb={2}>
              <MDInput type="text" label="Nama Lengkap" variant="standard" fullWidth />
            </MDBox>

            <MDBox mb={2}>
              <MDInput type="text" label="Username" variant="standard" fullWidth />
            </MDBox>

            <MDBox mb={2}>
              <MDInput type="text" label="Email" variant="standard" fullWidth />
            </MDBox>

            <MDBox mb={2}>
            <MDInput type="password" label="Password" fullWidth/>
            </MDBox>

            <MDBox mb={2}>
            <InputLabel>Staff Role</InputLabel>
              <Select
                sx={{ m: 1, minWidth: 120 }}
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={statusKawin}
                label="Status Pengguna"
                onChange={handleChange}
              >
              <MenuItem value={10}>Administrator</MenuItem>
              <MenuItem value={20}>IT Support</MenuItem>
              <MenuItem value={30}>Apoteker</MenuItem>
              <MenuItem value={30}>Staff Loker</MenuItem>
              <MenuItem value={30}>Dokter</MenuItem>
            </Select>
            </MDBox>

            <MDBox mb={2}>
            <MDInput type="text" label="Nomor Induk Karyawan" variant="standard" fullWidth />
            </MDBox>

            <MDBox mb={2}>
              <MDInput type="text" label="No. Telepon" variant="standard" fullWidth />
            </MDBox>

            <MDBox>
              <MDButton variant="contained" color="info">Simpan</MDButton>
            </MDBox>


        </MDBox>
      );
  }

export default AddPasien;