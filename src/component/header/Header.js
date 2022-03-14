import React from "react";
import "./style.scss";
import LogoDevIcon from "@mui/icons-material/LogoDev";
import DeviceHubIcon from "@mui/icons-material/DeviceHub";
import ConnectingAirportsIcon from "@mui/icons-material/ConnectingAirports";
import AirplayIcon from "@mui/icons-material/Airplay";
import ApprovalIcon from "@mui/icons-material/Approval";
import HowToRegIcon from "@mui/icons-material/HowToReg";

function Header() {
  return (
    <div className="header_container">
      <div className="menu_bar">
        <div className="menu_item_left">
          <LogoDevIcon className="menu_icon" />
          <DeviceHubIcon className="menu_icon" />
          <ConnectingAirportsIcon className="menu_icon" />
          <AirplayIcon className="menu_icon" />
        </div>
        <div className="menu_iten_right">
          <ApprovalIcon className="menu_icon" />
          <HowToRegIcon className="menu_icon" />
        </div>
      </div>
    </div>
  );
}

export default Header;
