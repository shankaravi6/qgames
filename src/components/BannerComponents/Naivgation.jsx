import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";
import usePalette, { colorTokens, useTheme } from "../../ThemeProvider";
import HomePage from "../../pages/HomePage";
import DarkModeIcon from '@mui/icons-material/DarkMode';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import XIcon from '@mui/icons-material/X';
import RedditIcon from '@mui/icons-material/Reddit';
import { useNavigate } from "react-router-dom";

const pages = ["Home", "Lottery Page", "Bidding"];

const Navigation = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const palette = usePalette();

  const { mode, toggleMode } = useTheme();

  const navigate = useNavigate();
 

  return (
    <AppBar
      position="static"
      style={{ backgroundColor: `${palette.main}`, boxShadow: "unset" }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: `${colorTokens.primary[900]}`,
              textDecoration: "none",
            }}
          >
            Q Games
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: `${colorTokens.primary[900]}`,
              textDecoration: "none",
            }}
          >
            Q Games
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            
              <Button
                onClick={() => navigate('/')}
                sx={{ my: 2, color: "white", display: "block", ml:5}}
              >
                Home
              </Button>
              <Button
                onClick={() => navigate('/bidding')}
                sx={{ my: 2, color: "white", display: "block", ml:5}}
              >
                Bidding
              </Button>
              <Button
                sx={{ my: 2, color: "white", display: "block", ml:5}}
              >
                Lottery
              </Button>
            
          </Box>

          <Box sx={{ flexGrow: 0, display:"flex", gap:"20px" }}>
            {/* <button onClick={toggleMode}><DarkModeIcon/></button> */}
              <FacebookIcon style={{color:`${colorTokens.primary[900]}`}} />
              <XIcon style={{color:`${colorTokens.primary[900]}`}}/>
              <InstagramIcon style={{color:`${colorTokens.primary[900]}`}}/>

          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Navigation;
