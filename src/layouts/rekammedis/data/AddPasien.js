import MDBox from "components/MDBox";
import MDInput from "components/MDInput";
import MDTypography from "components/MDTypography";
import * as React from 'react';
import MDButton from "components/MDButton";

function AddPasien() {
  
  
   
  return (
        
        <MDBox component="form" role="form">
          
            <MDBox mb={2}>
              <MDInput type="text" label="No Referensi Pasien" variant="standard" fullWidth />
            </MDBox>
         
          <MDTypography>
            Pilih Data Pasien
          </MDTypography>

          <MDBox mb={2}>
            <MDInput type="date" label="Tanggal Konsultasi" value="2018-11-23" fullWidth/>
            </MDBox>

          <MDBox mb={2}>
              <MDInput type="text" label="NIK KTP" variant="standard" fullWidth />
            </MDBox>

            <MDBox mb={2}>
              <MDInput type="text" label="Nama Pasien" variant="standard" fullWidth />
            </MDBox>

          <MDTypography>
           Rekam Medis Pasien
          </MDTypography>

            <MDBox mb={2}>
              <MDInput type="text" label="Tinggi Badan" variant="standard" fullWidth />
            </MDBox>

            <MDBox mb={2}>
              <MDInput type="text" label="Berat Badan" variant="standard" fullWidth />
            </MDBox>

            <MDBox mb={2}>
              <MDInput type="text" label="Tensi" variant="standard" fullWidth />
            </MDBox>

            <MDBox mb={2}>
              <MDInput type="text" label="Nadi" variant="standard" fullWidth />
            </MDBox>

            <MDBox mb={2}>
              <MDInput type="text" label="Respirasi" variant="standard" fullWidth />
            </MDBox>

            <MDBox mb={2}>
              <MDInput type="text" label="Suhu Badan" variant="standard" fullWidth />
            </MDBox>

            <MDBox mb={2}>
              <MDInput type="text" label="Laboratorium" variant="standard" fullWidth />
            </MDBox>
            

            <MDBox mb={2}>
            <MDInput label="Amnesa, Pemeriksaan Fisik, Diagnosa Penyakit" multiline rows={5} fullWidth />
            </MDBox>

            <MDBox mb={2}>
            <MDInput label="Anjuran" multiline rows={5} fullWidth />
            </MDBox>

            <MDBox mb={2}>
              <MDInput type="text" label="Pemberian Obat" variant="standard" fullWidth />
            </MDBox>

            <MDBox>
              <MDButton variant="contained" color="info">Simpan</MDButton>
            </MDBox>


        </MDBox>
      );
  }

export default AddPasien;