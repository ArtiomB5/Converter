import { Link } from "react-router-dom";
import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";

export const Header = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event: any) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const LinkComponent = (props: any) => {
    return <Link {...props} />;
  };
  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ mr: 2, display: { xs: "none", md: "flex" } }}
          >
            <img
              src="https://play-lh.googleusercontent.com/f2C5-k49AqU_aEowXEjtYFYirHC8xBdCkosQrPkPffpajid_ECDKRPjyeArPL6LDyCE"
              alt="Currency Converter"
              style={{ height: "50px", width: "auto" }}
            />
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
              {'MENU'}
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left"
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left"
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" }
              }}
            >
              <MenuItem
                onClick={handleCloseNavMenu}
                component={LinkComponent}
                to={"/"}
              >
                <Typography textAlign="center">Dashboard</Typography>
              </MenuItem>
              <MenuItem
                onClick={handleCloseNavMenu}
                component={LinkComponent}
                to={"/converter"}
              >
                <Typography textAlign="center">Currency Exchange</Typography>
              </MenuItem>
            </Menu>
          </Box>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}
          >
            <img
              src="https://play-lh.googleusercontent.com/f2C5-k49AqU_aEowXEjtYFYirHC8xBdCkosQrPkPffpajid_ECDKRPjyeArPL6LDyCE"
              alt="Currency Converter"
              style={{ height: "50px", width: "auto" }}
            />
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            <Button
              onClick={handleCloseNavMenu}
              sx={{ my: 2, color: "white", display: "block" }}
              component={LinkComponent}
              to={"/"}
            >
              Dashboard
            </Button>
            <Button
              onClick={handleCloseNavMenu}
              sx={{ my: 2, color: "white", display: "block" }}
              component={LinkComponent}
              to={"/converter"}
            >
              Currency Exchange
            </Button>
          </Box>

          <Box sx={{ flexGrow: 0 }}></Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
