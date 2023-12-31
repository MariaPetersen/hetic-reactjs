import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  AppBar,
  Button,
  Box,
  Toolbar,
  IconButton,
  Typography,
  Menu,
  MenuItem,
  Container,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

export default function Navigation() {
  // const [anchorElNav, setAnchorElNav] = useState(null);

  // const pages = ["Accueil", "Applications", "Gestion"];

  // const handleOpenNavMenu = (event) => {
  //   setAnchorElNav(event.currentTarget);
  // };
  // const handleCloseNavMenu = () => {
  //   setAnchorElNav(null);
  // };
  return (
    // <AppBar position="static">
    //   <Container maxWidth="xl">
    //     <Toolbar disableGutters>
    //       <Typography
    //         variant="h6"
    //         noWrap
    //         component="a"
    //         href="#app-bar-with-responsive-menu"
    //         sx={{
    //           mr: 2,
    //           display: { xs: "none", md: "flex" },
    //           fontFamily: "monospace",
    //           fontWeight: 700,
    //           letterSpacing: ".3rem",
    //           color: "inherit",
    //           textDecoration: "none",
    //         }}
    //       >
    //         LOGO
    //       </Typography>

    //       <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
    //         <IconButton
    //           size="large"
    //           aria-label="account of current user"
    //           aria-controls="menu-appbar"
    //           aria-haspopup="true"
    //           onClick={handleOpenNavMenu}
    //           color="inherit"
    //         >
    //           <MenuIcon />
    //         </IconButton>
    //         <Menu
    //           id="menu-appbar"
    //           anchorEl={anchorElNav}
    //           anchorOrigin={{
    //             vertical: "bottom",
    //             horizontal: "left",
    //           }}
    //           keepMounted
    //           transformOrigin={{
    //             vertical: "top",
    //             horizontal: "left",
    //           }}
    //           open={Boolean(anchorElNav)}
    //           onClose={handleCloseNavMenu}
    //           sx={{
    //             display: { xs: "block", md: "none" },
    //           }}
    //         >
    //           {pages.map((page) => (
    //             <MenuItem key={page} onClick={handleCloseNavMenu}>
    //               <Typography textAlign="center">{page}</Typography>
    //             </MenuItem>
    //           ))}
    //         </Menu>
    //       </Box>
    //       <Typography
    //         variant="h5"
    //         noWrap
    //         component="a"
    //         href="#app-bar-with-responsive-menu"
    //         sx={{
    //           mr: 2,
    //           display: { xs: "flex", md: "none" },
    //           flexGrow: 1,
    //           fontFamily: "monospace",
    //           fontWeight: 700,
    //           letterSpacing: ".3rem",
    //           color: "inherit",
    //           textDecoration: "none",
    //         }}
    //       >
    //         LOGO
    //       </Typography>
    //       <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
    //         {pages.map((page) => (
    //           <Button
    //             key={page}
    //             onClick={handleCloseNavMenu}
    //             sx={{ my: 2, color: "white", display: "block" }}
    //           >
    //             {page}
    //           </Button>
    //         ))}
    //       </Box>
    //     </Toolbar>
    //   </Container>
    // </AppBar>
    <AppBar position="static">
      <Toolbar
        sx={{
          display: "flex",
          margin: "auto",
        }}
      >
        <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ mr: 2 }}
        >
          <MenuIcon />
        </IconButton>
        <Button component={Link} to="/" sx={{ color: "#fff" }}>
          Accueil
        </Button>
        <Button component={Link} to="/applications" sx={{ color: "#fff" }}>
          Applications
        </Button>
        <Button component={Link} to="/articles" sx={{ color: "#fff" }}>
          Articles
        </Button>
      </Toolbar>
    </AppBar>
  );
}
