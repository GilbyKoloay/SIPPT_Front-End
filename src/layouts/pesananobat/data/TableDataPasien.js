/* eslint-disable react/prop-types */
/* eslint-disable react/function-component-definition */
/**
*/

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";

 

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
      { Header: "Nama Pasien", accessor: "namapasien", align: "left" },
      { Header: "Poli", accessor: "author", align: "left" },
      { Header: "Hari/Tanggal", accessor: "function", align: "left" },
      { Header: "Nama Obat", accessor: "status", align: "center" },
      { Header: "Dosis", accessor: "stok", align: "center" },
      { Header: "Catatan", accessor: "action", align: "center" },
    ],

    rows: [
        {
        
            namapasien: <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            Tarisha Hamzah
          </MDTypography>,
            author: <Job title="Umum" />,
            function: <Job title="Tomohon" description="4 Oktober 2022" />,
            status: (
              <MDTypography component="a" color="text" variant="caption" fontWeight="medium">
                Paracetamol 500 Mg
              </MDTypography>
            ),
            stok: (
              <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
                3 x 1 / hari
              </MDTypography>
            ),
            action: (
              <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
                Datang Kembali Jika Tidak Kunjung Sembuh
              </MDTypography>
            ),
    
            
          },   
      
      {
        
        namapasien: <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
        Tarisha Hamzah
      </MDTypography>,
        author: <Job  title="Umum" />,
        function: <Job title="Tomohon" description="4 Oktober 2022"/>,
        status: (
          <MDTypography component="a" color="text" variant="caption" fontWeight="medium">
            Paracetamol 500 Mg
          </MDTypography>
        ),
        stok: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            3 x 1 / hari
          </MDTypography>
        ),
        action: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            Datang Kembali Jika Tidak Kunjung Sembuh
          </MDTypography>
        ),

        
      },  

      

    ],
  };
}
