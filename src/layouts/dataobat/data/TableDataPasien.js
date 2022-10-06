/* eslint-disable react/prop-types */
/* eslint-disable react/function-component-definition */
/**
*/

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDBadge from "components/MDBadge";
 

export default function data() {
  
  const Job = ({ title, description }) => (
    <MDBox lineHeight={1} textAlign="left">
      <MDTypography display="block" variant="caption" color="text" fontWeight="medium">
        {title}
      </MDTypography>
      <MDTypography variant="caption">{description}</MDTypography>
    </MDBox>
  );

  return {
    columns: [
      { Header: "Nama Obat", accessor: "namaobat", align: "left" },
      { Header: "Kegunaan", accessor: "author", align: "left" },
      { Header: "Kadaluarsa Obat", accessor: "function", align: "left" },
      { Header: "Status Obat", accessor: "status", align: "center" },
      { Header: "Stok", accessor: "stok", align: "center" },
      { Header: "Aksi", accessor: "action", align: "center" },
    ],

    rows: [
      {
        
        namaobat: <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
        Paracetamol 500 Mg
      </MDTypography>,
        author: <Job title="Meringankan Demam" />,
        function: <Job title="25 Jan 2023" />,
        status: (
          <MDBox ml={-1}>
            <MDBadge badgeContent="Obat Keras" color="warning" variant="gradient" size="sm" />
          </MDBox>
        ),
        stok: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            1000
          </MDTypography>
        ),
        action: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            Edit | Detail
          </MDTypography>
        ),

        
      },

      { 
      namaobat: <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
      Paracetamol 500 Mg
    </MDTypography>,
      author: <Job title="Meringankan Demam" />,
      function: <Job title="25 Jan 2023" />,
      status: (
        <MDBox ml={-1}>
          <MDBadge badgeContent="Obat Keras" color="warning" variant="gradient" size="sm" />
        </MDBox>
      ),
      stok: (
        <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
          1000
        </MDTypography>
      ),
      action: (
        <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
          Edit | Detail
        </MDTypography>
      ),

      
    },

    ],
  };
}
