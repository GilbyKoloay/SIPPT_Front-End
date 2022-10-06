import MDBox from "components/MDBox";
import MDInput from "components/MDInput";
import MDTypography from "components/MDTypography";
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import * as React from 'react';
import MDButton from "components/MDButton";


function AddPasien() {

  const [statusKawin,sKawin] = React.useState('');

  const handleChange = (event) => {
    sKawin(event.target.value);
  };

   
  return (
        
        <MDBox component="form" role="form">
          
            <MDBox mb={2}>
              <MDInput type="text" label="No Referensi Pasien" variant="standard" fullWidth />
            </MDBox>
         
          <MDTypography>
            Data Obat
          </MDTypography>

          <MDBox mb={2}>
              <MDInput type="text" label="Nama Obat" variant="standard" fullWidth />
            </MDBox>

            <MDBox mb={2}>
            <InputLabel>Jenis Obat</InputLabel>
              <Select
                sx={{ m: 1, minWidth: 120 }}
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={statusKawin}
                label="Status Nikah"
                onChange={handleChange}
              >
              <MenuItem value={10}>Obat Keras</MenuItem>
              <MenuItem value={20}>Obat Bebas</MenuItem>
              <MenuItem value={30}>Obat Mengandung Narkotika</MenuItem>
            </Select>
            </MDBox>

             <MDBox mb={2}>
              <MDInput type="text" label="Stok Obat/Persediaan" variant="standard" fullWidth />
            </MDBox>

            <MDBox mb={2}>
              <MDInput type="text" label="Kegunaan" variant="standard" fullWidth />
            </MDBox>

            <MDBox mb={2}>
            <MDInput type="date" label="Tanggal Kadaluarsa" value="2018-11-23" fullWidth/>
            </MDBox>

            <MDBox>
              <MDButton variant="contained" color="info">Simpan</MDButton>
            </MDBox>

        </MDBox>
      );
  }

export default AddPasien;