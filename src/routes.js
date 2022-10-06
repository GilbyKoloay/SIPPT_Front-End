
// Material Dashboard 2 React layouts
import Dashboard from "layouts/dashboard";
import HalamanPasien from "layouts/halamanpasien";
import RekamMedis from "layouts/rekammedis";
import Notifications from "layouts/notifications";
import Signin from "layouts/authentication/sign-in";
import DataObat from "layouts/dataobat";
import Pengguna from "layouts/pengguna";
import Statistik from "layouts/statistik";
import DaftarPesananObat from "layouts/pesananobat";

// @mui icons
import Icon from "@mui/material/Icon";
// import { Table } from "react-bootstrap";

const routes = [
  {
    type: "collapse",
    name: "Dashboard",
    key: "dashboard",
    icon: <Icon fontSize="small">dashboard</Icon>,
    route: "/dashboard",
    component: <Dashboard />,
  },
  {
    type: "collapse",
    name: "Data Pasien",
    key: "halamanpasien",
    icon: <Icon fontSize="small">table_view</Icon>,
    route: "/halamanpasien",
    component: <HalamanPasien />,
  },

  {
    type: "collapse",
    name: "Rekam Medis",
    key: "rekammedis",
    icon: <Icon fontSize="small">table_view</Icon>,
    route: "/rekammedis",
    component: <RekamMedis />,
  },

  {
    type: "collapse",
    name: "Data Obat",
    key: "dataobat",
    icon: <Icon fontSize="small">receipt_long</Icon>,
    route: "/dataobat",
    component: <DataObat />,
  },

  {
    type: "collapse",
    name: "Daftar Pesanan Obat",
    key: "daftarpesananobat",
    icon: <Icon fontSize="small">receipt_long</Icon>,
    route: "/daftarpesananobat",
    component: <DaftarPesananObat />,
  },

  {
    type: "collapse",
    name: "Antrian Poli",
    key: "notifications",
    icon: <Icon fontSize="small">computer</Icon>,
    route: "/notifications",
    component: <Notifications />,
  },
  {
    type: "collapse",
    name: "Statistik Pengunjung",
    key: "statistik",
    icon: <Icon fontSize="small">person</Icon>,
    route: "/statistik",
    component: <Statistik />,
  },
  {
    type: "collapse",
    name: "Data Pengguna",
    key: "pengguna",
    icon: <Icon fontSize="small">person</Icon>,
    route: "/pengguna",
    component: <Pengguna />,
  },
  {
    type: "collapse",
    name: "Signout",
    key: "signin",
    icon: <Icon fontSize="small">Signout</Icon>,
    route: "/signin",
    component: <Signin />
  }
  
];

export default routes;
