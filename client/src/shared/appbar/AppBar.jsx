import {
  Avatar,
  Box,
  CssBaseline,
  Grid,
  IconButton,
  ListItemIcon,
  Menu,
  MenuItem,
  Stack,
  Toolbar,
  Tooltip,
  Typography,
} from "@mui/material";
import AppBarMui from "@mui/material/AppBar";
import * as utility from "../../services/UtilityService";
import Shared from "../Shared";
import { useAuth } from "../../hooks/UseAuth.js";
import { useState } from "react";
import Logout from "@mui/icons-material/Logout";
import Color from "../../config/Color";

const drawerWidth = 250;
const firstName = "Demo";
const lastName = "Hris";
const position = "HRIS Officer";

const handleDisplayTypography = (text, style) => {
  const response = (
    <Shared.TextTypography
      text={text}
      style={{ ...style, whiteSpace: "pre-wrap", overflowWrap: "break-word" }}
    />
  );
  return response;
};

const AppBar = ({ children, barTitleName }, props) => {
  const { user, logout } = useAuth();

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    logout();
  };

  return (
    <>
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <AppBarMui
          position="fixed"
          sx={{
            display: "flex",
            backgroundColor: "#FFF",
            color: Color.blackColor,
            boxShadow: "none",
            width: "100%",
            alignItems: "center"
          }}
        >
          <Toolbar
            sx={{
              display: "flex",
              justifyContent: "space-between",
              width: "100%",
            }}
          >
            <Stack>
              {handleDisplayTypography(barTitleName, { fontWeight: "bold", marginTop:7 })}
            </Stack>
            <Box sx={{ display: "flex" }}>
              <Tooltip title="Account settings">
                <IconButton
                  onClick={handleClick}
                  size="small"
                  sx={{ ml: 1 }}
                  aria-controls={open ? "account-menu" : undefined}
                  aria-haspopup="true"
                  aria-expanded={open ? "true" : undefined}
                >
                  <Avatar sx={{ width: 40, height: 40, fontSize: "1rem" }}>
                    {user.pictureURL == "" || user.pictureURL == null ? (
                      utility.splitName(user.firstName2, user.lastName2)
                    ) : (
                      <img
                        style={{ width: "100%" }}
                        src={user.pictureURL}
                        alt="AvatarImg"
                      ></img>
                    )}
                  </Avatar>
                </IconButton>
              </Tooltip>
              <Typography
                sx={{
                  marginTop: "2%",
                  fontSize: "14px",
                  textAlign: "",
                  display: { xs: "none", sm: "none", md: "block" },
                  color: Color.blackColor,
                }}
                noWrap
                component="div"
              >
                {
                  <>
                    {user.displayName1} <br /> {user.positionName}
                  </>
                }
                <br />
              </Typography>
            </Box>
          </Toolbar>
          <hr
            style={{
              marginBlock: 0,
              borderWidth: "1.8px",
            }}
            color={Color.primaryColor}
            width={"98%"}
          />
        </AppBarMui>
        
        <Box
          component="main"
          sx={{
            flexGrow: 1,

            width: "100%",
          }}
        >
          <Toolbar />
          {children}
        </Box>

        <Menu
          anchorEl={anchorEl}
          id="account-menu"
          open={open}
          onClose={handleClose}
          onClick={handleClose}
          MenuListProps={{
            "aria-labelledby": "basic-button",
          }}
          PaperProps={{
            elevation: 0,
            sx: {
              overflow: "visible",
              filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",

              "& .MuiAvatar-root": {
                width: 32,
                height: 32,
                ml: 0.5,
                mr: 1,
              },
              "&:before": {
                content: '""',
                display: "block",
                position: "absolute",
                top: 0,
                right: 90,
                width: 10,
                height: 10,
                bgcolor: "background.paper",
                zIndex: 0,
              },
            },
          }}
          transformOrigin={{ horizontal: "left", vertical: "top" }}
          anchorOrigin={{ horizontal: "left", vertical: "bottom" }}
        >
          <MenuItem onClick={handleLogout}>
            <ListItemIcon>
              <Logout fontSize="small" />
            </ListItemIcon>
            Logout
          </MenuItem>
        </Menu>
      </Box>
    </>
  );
};

export default AppBar;
