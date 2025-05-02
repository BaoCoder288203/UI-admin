import { Box, Typography, IconButton } from "@mui/material";
import {
  Apps,
  BarChart,
  Email,
  Settings,
  Lock,
  Person,
} from "@mui/icons-material";

const Sidebar = () => {
  return (
    <Box
      sx={{
        width: "80px",
        height: "100vh",
        bgcolor: "#f5f7fa",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        py: 2,
        borderRight: "1px solid #e0e0e0",
        position: "fixed",
        top: 0,
        left: 0,
      }}
    >
      {/* Logo */}
      <Box sx={{ mb: 4 }}>
        <BarChart sx={{ fontSize: 40, color: "#3f51b5" }} />
        <Typography
          variant="caption"
          sx={{ color: "#3f51b5", fontWeight: "bold" }}
        >
          Base
        </Typography>
      </Box>

      {/* Navigation Icons */}
      <IconButton sx={{ mb: 2, color: "#3f51b5" }}>
        <Apps />
      </IconButton>
      <IconButton sx={{ mb: 2, color: "#3f51b5" }}>
        <BarChart />
      </IconButton>
      <IconButton sx={{ mb: 2, color: "#3f51b5" }}>
        <Email />
      </IconButton>
      <IconButton sx={{ mb: 2, color: "#3f51b5" }}>
        <Settings />
      </IconButton>
      <IconButton sx={{ mb: 2, color: "#3f51b5" }}>
        <Lock />
      </IconButton>
      <IconButton sx={{ mt: "auto", color: "#3f51b5" }}>
        <Person />
      </IconButton>
    </Box>
  );
};

export default Sidebar;
