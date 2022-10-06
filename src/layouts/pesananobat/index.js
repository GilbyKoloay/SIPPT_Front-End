
// @mui material components
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";

import * as React from 'react';

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";

// Material Dashboard 2 React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
// import Footer from "examples/Footer";
import DataTable from "examples/Tables/DataTable";

// Data
import DataPasien from "layouts/pesananobat/data/TableDataPasien";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Typography from '@mui/material/Typography';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  height: '100%',
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
  overflow:'scroll'
};

  

function halamanpasien() {
  const { columns, rows } = DataPasien();
  // const { columns: pColumns, rows: pRows } = projectsTableData();
  const [open, setOpen] = React.useState(false);
  const handleClose = () => setOpen(false);
  


  return (
   
   <DashboardLayout>
      <DashboardNavbar />
      <MDBox pt={6} pb={3}>
        <Grid container spacing={6}>
          <Grid item xs={12}>
            <Card>
              <MDBox
                mx={2}
                mt={-3}
                py={3}
                px={2}
                variant="gradient"
                bgColor="info"
                borderRadius="lg"
                coloredShadow="info"
              >
                
                
                <MDTypography alignitems="center" justifyContent="space-between" display="flex" variant="h6" color="white">
                  Pesanan Obat
                

                <Modal
                  open={open}
                  onClose={handleClose}
                  aria-labelledby="modal-modal-title"
                  aria-describedby="modal-modal-description"
                >
                  
                  <Box sx={style}>
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                      Form Pesanan Obat
                    </Typography>
                    
                  
                  
                  </Box>


                </Modal>
                
                </MDTypography>
                
              </MDBox>
              <MDBox pt={3}>
                <DataTable
                  table={{ columns, rows }}
                  isSorted={true}
                  canSearch={true}
                  entriesPerPage={true}
                  showTotalEntries={false}
                  noEndBorder
                />
              </MDBox>
            </Card>
          </Grid>
          <Grid item xs={12}>
            <Card>
              <MDBox
                mx={2}
                mt={-3}
                py={3}
                px={2}
                variant="gradient"
                bgColor="info"
                borderRadius="lg"
                coloredShadow="info"
              >
                
              </MDBox>
              
            </Card>
          </Grid>
        </Grid>
      </MDBox>
      
    </DashboardLayout>
  );
}

export default halamanpasien;
