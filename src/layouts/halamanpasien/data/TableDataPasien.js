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
      { Header: "Nomor Peserta", accessor: "nopasien", align: "left" },
      { Header: "Nama Pasien", accessor: "author", align: "left" },
      { Header: "Tempat Tanggal Lahir", accessor: "function", align: "center" },
      { Header: "Status Pembayaran", accessor: "status", align: "center" },
      { Header: "Jenis Kelamin", accessor: "employed", align: "center" },
      { Header: "Aksi", accessor: "action", align: "center" },
    ],

    rows: [
      {
        
        nopasien: <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
        12345678
      </MDTypography>,
        author: <Job title="Jhony Jhony" />,
        function: <Job title="Tomohon" description="25/01/1990" />,
        status: (
          <MDBox ml={-1}>
            <MDBadge badgeContent="BPJS" color="success" variant="gradient" size="sm" />
          </MDBox>
        ),
        employed: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            Pria
          </MDTypography>
        ),
        action: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            Edit | Detail
          </MDTypography>
        ),

        
      },

      {
        
        nopasien: ( <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
        12345678
      </MDTypography>),
        author: <Job title="Jhony Jhony" />,
        function: <Job title="Tomohon" description="25/01/1990" />,
        status: (
          <MDBox ml={-1}>
            <MDBadge badgeContent="Pribadi" color="warning" variant="gradient" size="sm" />
          </MDBox>
        ),
        employed: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            Pria
          </MDTypography>
        ),
        action: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            Edit | Detail
          </MDTypography>
        ),
      },

      {
        
        nopasien: ( <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
        12345679
      </MDTypography>),
        author: <Job title="Tarisha Hamzah" />,
        function: <Job title="Tomohon" description="11/01/2001" />,
        status: (
          <MDBox ml={-1}>
            <MDBadge badgeContent="Pribadi" color="warning" variant="gradient" size="sm" />
          </MDBox>
        ),
        employed: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            Wanita
          </MDTypography>
        ),
        action: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            Edit | Detail
          </MDTypography>
        ),
      },
      
      {
        
        nopasien: ( <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
        12345680
      </MDTypography>),
        author: <Job title="Tarisha Hamzah" />,
        function: <Job title="Tomohon" description="11/01/2001" />,
        status: (
          <MDBox ml={-1}>
            <MDBadge badgeContent="BPJS" color="success" variant="gradient" size="sm" />
          </MDBox>
        ),
        employed: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            Wanita
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
