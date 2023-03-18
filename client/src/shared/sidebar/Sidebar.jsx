import * as React from "react";
import { useNavigate, matchPath, useLocation } from "react-router-dom";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { getMenuAdminItem } from "../../config/Menu";
import KerryLogo from "../../Images/Kerrry_Express_x.png";
import Avatar from "@mui/material/Avatar";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Tooltip from "@mui/material/Tooltip";
import Logout from "@mui/icons-material/Logout";
import { useAuth } from "../../hooks/useAuth";
import * as utility from "../../services/utilityService";
import { Stack } from "@mui/system";
import moment from "moment/moment";
import Shared from "../Shared";
import Color from "../../config/Color";

const drawerWidth = 250;
const handleDisplayTypography = (text, style) => {
  const response = (
    <Shared.TextTypography
      text={text}
      style={{ ...style, whiteSpace: "pre-wrap", overflowWrap: "break-word" }}
    />
  );
  return response;
};

function Sidebar({ children, barTitleName, expat, isAdmin }, props) {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const { windows } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [width, setWidth] = React.useState(window.innerWidth);
  const [manualDoc, setManualDoc] = React.useState("");
  const { logoutAdmin, user } = useAuth();

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    logoutAdmin();
  };

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleListItemClick = (event, index, link) => {
    navigate(link);
  };

  const handlemanualItemClick = (event, index, link) => {
    const isMobile = width <= 768;

    if (isMobile) {
      window.open("pdfviewer.html?fn=ManualCOI_24112022.pdf&fld=Coi", "_self");
    } else {
      window.open(manualDoc);
    }
  };

  function handleWindowSizeChange() {
    setWidth(window.innerWidth);
  }

  React.useEffect(() => {
    moment.locale("th");

    window.addEventListener("resize", handleWindowSizeChange);
    return () => {
      window.removeEventListener("resize", handleWindowSizeChange);
    };
  }, []);

  const drawer = (
    <div>
      <Toolbar
        sx={{
          backgroundColor: Color.primaryColor,
          justifyContent: "center",
        }}
      >
        <div style={{ marginTop: "0.5rem" }}>
          <svg
            width="100"
            height="40"
            viewBox="0 0 140 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="logo"
          >
            <path
              d="M23.456 15.336c.733.519.942 1.451.418 2.177-.523.725-1.466.932-2.199.518L9.53 10.259 3.56 13.368v3.108c0 .933-.837 1.762-1.78 1.762-.942 0-1.78-.829-1.78-1.762V1.762C0 .829.838 0 1.78 0c.943 0 1.78.829 1.78 1.762V9.74l9.058-4.767L21.675.207c.838-.414 1.78-.103 2.2.622.418.829.104 1.762-.629 2.176L12.775 8.497l10.68 6.84zM43.037 25.077c.314-.103.628-.103.837.208.21.31.105.725-.104 1.036l-3.142 2.072 3.142 2.073c.209.207.314.518.104.829-.21.207-.523.31-.837.103l-3.56-2.383-3.665 2.383c-.315.104-.629.104-.838-.207-.105-.31-.105-.621.21-.829l3.245-2.176-3.246-2.176c-.314-.207-.419-.518-.21-.829.21-.31.63-.31.839-.31l3.664 2.486 3.56-2.28zM103.036 27.772c1.257 0 2.199.414 2.095 2.072 0 1.658-.943 2.073-2.095 2.073h-6.701c-.314 0-.628-.311-.628-.622s.314-.622.628-.622h6.597c.419 0 .837-.103.837-.829 0-.622-.314-.829-.837-.829h-5.131c-1.152 0-2.094-.414-2.094-2.072 0-1.658.942-2.073 2.094-2.073h6.701c.315 0 .629.311.629.622 0 .31-.314.622-.629.622h-6.596c-.524 0-.943.207-.943.829 0 .621.419.829.943.829h5.13zM118.429 27.772h-5.13c-.524 0-.838-.208-.838-.83 0-.621.419-.828.838-.828h6.596c.315 0 .629-.311.629-.622s-.314-.622-.629-.622h-6.701c-1.152 0-2.094.415-2.094 2.073s.942 2.072 2.094 2.072h5.131c.523 0 .942.207.942.83 0 .725-.419.828-.942.828h-6.597c-.314 0-.628.311-.628.622 0 .31.314.622.628.622h6.806c1.152 0 2.094-.415 2.094-2.073-.104-1.658-1.047-2.072-2.199-2.072zM52.356 16.373c0-.83-.628-1.451-1.466-1.451H33.403c-.942 0-1.57-.622-1.57-1.554v-2.695h16.23c.838 0 1.466-.621 1.466-1.45 0-.83-.628-1.451-1.466-1.451h-16.23V4.87c0-.932.628-1.554 1.57-1.554H50.89c.838 0 1.466-.622 1.466-1.45 0-.83-.628-1.452-1.466-1.452H32.565c-2.513-.103-4.293 1.658-4.293 4.146v9.119c0 2.487 1.78 4.248 4.294 4.248H50.89c.838 0 1.466-.725 1.466-1.554zM28.587 26.114H21.57c-.42 0-.629.207-.629.518v1.14h6.493c.314 0 .628.31.628.621s-.314.622-.628.622h-6.492v.933c0 .414.209.622.628.622h7.015c.315 0 .629.31.629.621s-.314.622-.628.622h-7.33c-.943 0-1.676-.622-1.676-1.658v-3.627c0-.932.628-1.658 1.676-1.658h7.33c.314 0 .628.311.628.622 0 .31-.314.622-.628.622zM82.304 26.114h7.015c.314 0 .629-.311.629-.622s-.315-.622-.629-.622h-7.33c-1.047 0-1.675.726-1.675 1.658v3.627c0 1.036.733 1.658 1.676 1.658h7.33c.313 0 .628-.31.628-.622 0-.31-.315-.621-.629-.621h-7.015c-.42 0-.629-.208-.629-.622v-.933h6.493c.314 0 .628-.31.628-.622 0-.31-.314-.621-.629-.621h-6.492v-1.14c0-.311.21-.518.629-.518zM136.44 1.762c0-.933.838-1.762 1.78-1.762 1.047 0 1.78.829 1.78 1.762v11.813c0 2.487-1.78 4.248-4.293 4.248h-17.278c-.837 0-1.466-.621-1.466-1.45 0-.83.629-1.451 1.466-1.451h16.44c.943 0 1.571-.622 1.571-1.554V10.88h-16.649c-2.513 0-4.294-1.762-4.294-4.249v-4.87c0-.933.838-1.762 1.781-1.762.942 0 1.78.829 1.78 1.762v4.56c0 .932.628 1.554 1.57 1.554h15.812V1.762zM80.838 17.41c.419-.726.104-1.762-.629-2.177l-9.214-4.559 5.13.104c2.933 0 5.34-1.14 5.34-5.285 0-4.145-2.407-5.285-5.34-5.285H58.64c-.943 0-1.78.829-1.78 1.761v14.404c0 .933.837 1.762 1.78 1.762.942 0 1.78-.829 1.78-1.762V3.317h15.078c1.257 0 2.304.518 2.304 2.28 0 1.761-1.047 2.28-2.304 2.28h-10.47c-.839 0-1.467.62-1.467 1.45 0 .622.314 1.14.838 1.347l14.345 7.357c.733.415 1.676.104 2.095-.621zM74.555 26.943c0 1.658-.942 2.072-2.094 2.072h-2.094l3.664 1.762c.315.103.524.518.315.829-.105.31-.524.518-.838.31l-5.655-2.9a.569.569 0 01-.314-.519c0-.31.314-.622.629-.622h4.083c.524 0 .943-.207.943-.932 0-.726-.42-.933-.943-.933h-5.864v5.181a.712.712 0 01-.733.726.712.712 0 01-.733-.726v-5.595c0-.415.315-.726.733-.726h6.807c1.152 0 2.094.415 2.094 2.073z"
              fill="#fff"
            ></path>
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M57.173 24.87h-6.806a.712.712 0 00-.733.726v5.595c0 .415.314.726.733.726.418 0 .733-.311.733-.726v-2.176h6.073c1.152 0 2.094-.414 2.094-2.072 0-1.555-.942-2.073-2.094-2.073zm-.21 3.005H51.1v-1.761h5.863c.524 0 .943.207.943.932 0 .622-.419.83-.943.83z"
              fill="#fff"
            ></path>
            <path
              d="M110.89 5.596c0 4.145-2.408 5.285-5.34 5.285l-4.922-.207 9.215 4.559c.733.415 1.047 1.45.628 2.176-.419.726-1.466 1.036-2.199.622l-14.345-7.357c-.524-.208-.838-.726-.838-1.348 0-.829.628-1.45 1.466-1.45h10.471c1.257 0 2.304-.519 2.304-2.28 0-1.762-1.047-2.28-2.304-2.28H89.948v13.16c0 .933-.838 1.762-1.78 1.762-.943 0-1.78-.829-1.78-1.761V2.073c0-.933.837-1.762 1.78-1.762h17.382c2.932 0 5.34 1.14 5.34 5.285z"
              fill="#fff"
            ></path>
          </svg>
        </div>
      </Toolbar>

      <List>
        {isAdmin ? (
          getMenuAdminItem()
            .sort((a, b) => a.sortOrder - b.sortOrder)
            .map((m) => (
              <ListItem
                key={m.text}
                onClick={(event) =>
                  handleListItemClick(event, m.sortOrder, m.link)
                }
                disablePadding
              >
                <ListItemButton selected={m.link == pathname}>
                  <ListItemIcon>{m.icon}</ListItemIcon>
                  <ListItemText primary={m.text} />
                </ListItemButton>
              </ListItem>
            ))
        ) : (
          <></>
        )}
      </List>
      <Divider />
      <List>{isAdmin ? <></> : <></>}</List>
    </div>
  );

  const container =
    windows !== undefined ? () => windows().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          backgroundColor: isAdmin ? Color.primaryColor : "#FFF",
          color: isAdmin ? "#FFF" : "#EC6C00",
          boxShadow: "none",
          borderBottom: isAdmin ? "0px solid #EC6C00" : "0px solid #0000001f",
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      >
        <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Stack sx={{ display: { xs: "none", sm: "block" } }}>
            {handleDisplayTypography(barTitleName)}
            {handleDisplayTypography(moment().format("DD/MM/yyyy"), {
              fontSize: "13px",
            })}
          </Stack>
          <Stack sx={{ display: { xs: "block", sm: "none" } }}>
            {handleDisplayTypography("Security Report", {
              fontSize: "1.8rem",
              color: Color.whiteColor,
              fontWeight: "bold",
            })}
          </Stack>
          <Box sx={{ display: "flex" }}>
            <Typography
              sx={{
                marginTop: "2%",
                fontSize: "14px",
                textAlign: "end",
                display: { xs: "none", sm: "none", md: "block" },
                color: isAdmin ? "#FFF" : "#EC6C00",
              }}
              noWrap
              component="div"
            >
              <>
                {user?.displayName2 || ""} <br /> {user?.positionName || ""}
              </>

              <br />
            </Typography>
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
                  {user?.pictureURL == "" || user?.pictureURL == null ? (
                    utility.splitName(
                      user?.firstName2 || "",
                      user?.lastName2 || ""
                    )
                  ) : (
                    <img
                      style={{ width: "100%" }}
                      src={user?.pictureURL}
                      alt="AvatarImg"
                    ></img>
                  )}
                </Avatar>
              </IconButton>
            </Tooltip>
          </Box>
        </Toolbar>
      </AppBar>

      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: "visible",
            filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
            mt: 1.5,
            "& .MuiAvatar-root": {
              width: 32,
              height: 32,
              ml: -0.5,
              mr: 1,
            },
            "&:before": {
              content: '""',
              display: "block",
              position: "absolute",
              top: 0,
              right: 14,
              width: 10,
              height: 10,
              bgcolor: "background.paper",
              transform: "translateY(-50%) rotate(45deg)",
              zIndex: 0,
            },
          },
        }}
        transformOrigin={{ horizontal: "right", vertical: "top" }}
        anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
      >
        <MenuItem onClick={handleLogout}>
          <ListItemIcon>
            <Logout fontSize="small" />
          </ListItemIcon>
          Logout
        </MenuItem>
      </Menu>

      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", sm: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 1,
          pt: 2,
          pb: 3,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
        }}
      >
        <Toolbar />
        {children}
      </Box>
    </Box>
  );
}

Sidebar.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  windows: PropTypes.func,
};

export default Sidebar;
