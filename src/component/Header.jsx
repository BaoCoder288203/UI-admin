import { Box, InputBase, IconButton, Avatar, Badge } from "@mui/material";
import { Search as SearchIcon, Notifications } from "@mui/icons-material";

const Header = () => {
  return (
    <Box
      sx={{
        height: "64px",
        bgcolor: "#fff",
        borderBottom: "1px solid #e0e0e0",
        display: "flex",
        alignItems: "center",
        px: 3,
        position: "fixed",
        top: 0,
        left: "80px",
        right: 0,
        zIndex: 1100,
      }}
    >
      {/* Search Bar */}
      <Box
        sx={{
          flexGrow: 1,
          display: "flex",
          alignItems: "center",
          bgcolor: "#f5f7fa",
          borderRadius: "20px",
          px: 2,
          py: 1,
        }}
      >
        <SearchIcon sx={{ color: "#757575", mr: 1 }} />
        <InputBase placeholder="Search" sx={{ flexGrow: 1 }} />
      </Box>

      {/* Right Section */}
      <Box sx={{ display: "flex", alignItems: "center", ml: 2 }}>
        <IconButton sx={{ mr: 1 }}>
          <img
            src="https://cdn-icons-png.flaticon.com/512/323/323303.png"
            alt="UK Flag"
            width={24}
            height={24}
          />
        </IconButton>
        <IconButton sx={{ mr: 1 }}>
          <Badge badgeContent={2} color="error">
            <Notifications />
          </Badge>
        </IconButton>
        <Avatar
          src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
          sx={{ width: 32, height: 32 }}
        />
      </Box>
    </Box>
  );
};

export default Header;
