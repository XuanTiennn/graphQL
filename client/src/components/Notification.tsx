import * as React from "react";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import { Badge, Menu, MenuItem } from "@mui/material";

export interface INotificationProps {}

export function Notification(props: INotificationProps) {
  const [invisible, setInvisible] = React.useState(true);
  const [notification, setNotification] = React.useState("");

  const [anchorEl, setAnchorEl] = React.useState(null);

  const open = Boolean(anchorEl);
  const handleClose = () => {
    setAnchorEl(null);
    setNotification("");
    setInvisible(true);
  };

  const handleClick = (e) => {
    if (notification) {
      setAnchorEl(e.currentTarget);
    }
  };

  return (
    <>
      <Badge
        color="error"
        variant="dot"
        invisible={invisible}
        overlap="circular"
        sx={{ "&:hover": { cursor: "pointer" }, ml: "5px" }}
      >
        <NotificationsNoneIcon onClick={handleClick} sx={{ color: "#7D9D9C" }} />
      </Badge>
      <Menu anchorEl={anchorEl} open={open} onClose={handleClose}>
        <MenuItem onClick={handleClose}>{notification}</MenuItem>
      </Menu>
    </>
  );
}
