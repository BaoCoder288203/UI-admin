import { Box } from "@mui/material";
import "./styles.css";
import AdminDashboard from "./component/AdminDashboard";
import Sidebar from "./component/Sidebar";
import Header from "./component/Header";

export default function App() {
  return (
    <Box className="App" sx={{ display: "flex" }}>
      <Sidebar />
      {/* Main Content */}
      <Box
        sx={{
          flexGrow: 1,
          ml: "80px", // Match Sidebar width
          mt: "64px", // Match Header height
          bgcolor: "#f5f7fa",
          minHeight: "100vh",
        }}
      >
        <Header />
        <AdminDashboard />
      </Box>
    </Box>
  );
}
