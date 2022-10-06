import MDBox from "components/MDBox";
import MDInput from "components/MDInput";
import MDTypography from "components/MDTypography";
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import * as React from 'react';
import Checkbox from "@mui/material/Checkbox";
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
            Data Diri
          </MDTypography>

          <MDBox mb={2}>
              <MDInput type="text" label="NIK KTP" variant="standard" fullWidth />
            </MDBox>


            <MDBox mb={2}>
              <MDInput type="text" label="Nama Pasien" variant="standard" fullWidth />
            </MDBox>

            <MDBox mb={2}>
              <MDInput type="text" label="Tempat Lahir" variant="standard" fullWidth />
            </MDBox>

            <MDBox mb={2}>
            <MDInput type="date" label="Tanggal Lahir" value="2018-11-23" fullWidth/>
            </MDBox>

            <MDBox mb={2}>
              <MDInput type="text" label="Agama" variant="standard" fullWidth />
            </MDBox>

            <MDBox mb={2}>
            <InputLabel>Status Kawin</InputLabel>
              <Select
                sx={{ m: 1, minWidth: 120 }}
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={statusKawin}
                label="Status Nikah"
                onChange={handleChange}
              >
              <MenuItem value={10}>Belum Kawin</MenuItem>
              <MenuItem value={20}>Kawin</MenuItem>
              <MenuItem value={30}>Cerai</MenuItem>
            </Select>
            </MDBox>

            <MDBox>
            <InputLabel>Jenis Kelamin</InputLabel>
              <Checkbox />
              <MDTypography variant="button"
                fontWeight="regular"
                color="text"
                sx={{ cursor: "pointer", userSelect: "none", ml: -1 }}>
                Pria
              </MDTypography>
             </MDBox>

             <MDBox>
              <Checkbox />
              <MDTypography variant="button"
                fontWeight="regular"
                color="text"
                sx={{ cursor: "pointer", userSelect: "none", ml: -1 }}>
                Wanita
              </MDTypography>
             </MDBox>


            <MDBox mb={2}>
            <MDInput label="Alamat" multiline rows={5} fullWidth />
            </MDBox>

            <MDBox mb={2}>
              <MDInput type="text" label="Pekerjaan" variant="standard" fullWidth />
            </MDBox>

            <MDBox mb={2}>
              <MDInput type="text" label="No. Telepon" variant="standard" fullWidth />
            </MDBox>

            
            <MDTypography>
            Data Kepesertaan Asuransi
            </MDTypography>
            
            <MDBox mb={2}>
            <InputLabel>Silahkan Pilih</InputLabel>
              <Select
                sx={{ m: 1, minWidth: 120 }}
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={statusKawin}
                label="Status Nikah"
                onChange={handleChange}
              >
              <MenuItem value={10}>Pribadi</MenuItem>
              <MenuItem value={20}>BPJS</MenuItem>
              <MenuItem value={30}>Asuransi Swasta</MenuItem>
            </Select>
            </MDBox>

            <MDBox mb={2}>
              <MDInput type="text" label="Nomor Kartu Asuransi" variant="standard" fullWidth />
            </MDBox>

            <MDBox mb={2}>
              <MDInput type="text" label="FASKES Tingkat 1" variant="standard" fullWidth />
            </MDBox>

            <MDBox mb={2}>
              <MDInput type="text" label="Kelas Rawat Jalan" variant="standard" fullWidth />
            </MDBox>

            <MDBox>
              <MDButton variant="contained" color="info">Simpan</MDButton>
            </MDBox>

        </MDBox>
      );
  }

export default AddPasien;