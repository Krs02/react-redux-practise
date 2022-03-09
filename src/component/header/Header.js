import React, { useState } from "react";
import "./style.scss";
import LogoDevIcon from "@mui/icons-material/LogoDev";
import PaletteIcon from "@mui/icons-material/Palette";
import Palette from "../palette/Palette";

function Header() {
  const [togglePalette, setTogglePalette] = useState(false);
  const openPalette = (e) => {
    setTogglePalette((prevTogglePalette) => {
      return !prevTogglePalette;
    });
  };
  return (
    <div className="header">
      <div className="main_container">
        <div className="logo">
          <LogoDevIcon fontSize="medium" />
        </div>
        <div className="palette_icon">
          <PaletteIcon fontSize="large" onClick={openPalette} />
        </div>
        {togglePalette ? (
          <div>
            <Palette openPalette_={openPalette} />{" "}
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}

export default Header;
