import React, { useEffect, useRef, useState } from "react";
import PaletteOutlinedIcon from "@mui/icons-material/PaletteOutlined";
import "./style.scss";
import Modal from "../modal/Modal";
import Palette from "../palette/Palette";

function Header() {
  const [openColorPanel, setOpenColorPanel] = useState(false);
  const [style, setStyle] = useState({});
  const renderCnt = useRef(0);
  const onColorPanel = (event) => {
    setOpenColorPanel((prevOpenColorPanel) => {
      return !prevOpenColorPanel;
    });
  };
  useEffect(() => {
    renderCnt.current = renderCnt.current + 1;
    console.log("use Effect all time", renderCnt);
  });
  useEffect(() => {
    console.log("Field onChange ");
  }, [openColorPanel]);

  useEffect(() => {
    console.log(`Updated:Field  style is ${style}`);
  }, [style]);

  useEffect(() => {
    console.log("Loading Time - One Time");
  }, []);
  const closeEvent_ = () => {
    console.log("Parent close event captured");
    setOpenColorPanel((prevOpenColorPanel) => false);
  };
  return (
    <div className="header">
      <div className="header__container">
        <div className="logo">Logo</div>
        <div className="menu">Menus</div>
        <div className="sidebar">
          <PaletteOutlinedIcon color="success" fontSize="large" onClick={onColorPanel} />
        </div>
      </div>
      {openColorPanel ? (
        <Modal closeEvent={closeEvent_}>
          <Palette />
        </Modal>
      ) : null}
    </div>
  );
}
export default Header;
