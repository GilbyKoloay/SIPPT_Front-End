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
      { Header: "NIP", accessor: "nip", align: "left" },
      { Header: "Nama Staff", accessor: "author", align: "left" },
      { Header: "Username", accessor: "function", align: "left" },
      { Header: "Status", accessor: "status", align: "center" },
      { Header: "Divisi", accessor: "employed", align: "center" },
      { Header: "Aksi", accessor: "action", align: "center" },
    ],

    rows: [
      {
        
        nip: <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
        12345678
      </MDTypography>,
        author: <Job title="Jhony Jhony" />,
        function: <Job title="jhonyj" description="jhony@email.com" />,
        status: (
          <MDBox ml={-1}>
            <MDBadge badgeContent="Administrator" color="success" variant="gradient" size="sm" />
          </MDBox>
        ),
        employed: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            IT Support
          </MDTypography>
        ),
        action: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            Edit | Detail
          </MDTypography>
        ),

        
      },

      {
        
        nip: <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
        12345678
      </MDTypography>,
        author: <Job title="Dody" />,
        function: <Job title="dodyyy" description="dody@email.com" />,
        status: (
          <MDBox ml={-1}>
            <MDBadge badgeContent="Staff Loker" color="primary" variant="gradient" size="sm" />
          </MDBox>
        ),
        employed: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            Petugas Loker
          </MDTypography>
        ),
        action: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            Edit | Detail
          </MDTypography>
        ),

        
      },

      {
        
        nip: <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
        12345678
      </MDTypography>,
        author: <Job title="Tiara" />,
        function: <Job title="Tiara" description="tiara@email.com" />,
        status: (
          <MDBox ml={-1}>
            <MDBadge badgeContent="Staff Apoteker" color="warning" variant="gradient" size="sm" />
          </MDBox>
        ),
        employed: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            Petugas Apoteker
          </MDTypography>
        ),
        action: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            Edit | Detail
          </MDTypography>
        ),

        
      },

      {
        
        nip: <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
        12345679
      </MDTypography>,
        author: <Job title="Tarisha" />,
        function: <Job title="Tarisha" description="Tarisha@email.com" />,
        status: (
          <MDBox ml={-1}>
            <MDBadge badgeContent="Staff Poli" color="secondary" variant="gradient" size="sm" />
          </MDBox>
        ),
        employed: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            Petugas Poli
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
