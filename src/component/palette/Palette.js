import React, { useEffect, useState } from "react";
import CancelPresentationRoundedIcon from "@mui/icons-material/CancelPresentationRounded";

import "./style.scss";
function Palette(props) {
  const [rgb, setRgb] = useState([0, 0, 0]);
  const [hexValue, setHexValue] = useState("#FFF");
  const [selectionPanel, setSelectionPanel] = useState("B");
  const [style, setStyle] = useState({ backgroundColor: "#FFF", color: "#000" });
  const onSliderUpdate = (e, index) => {
    setRgb((preRgb) => {
      let newRgb = [...preRgb];
      newRgb[e.target.id] = e.target.value;
      return newRgb;
    });
  };
  useEffect(() => {
    decToHex(rgb);
    return () => {
      //second;
    };
  }, [rgb]);

  const decToHex = (rgb) => {
    let hex = "#";
    rgb.forEach((i, k) => {
      hex = "" + hex + (Number(i).toString(16).length < 2 ? "0" + Number(i).toString(16) : Number(i).toString(16));
    });
    setHexValue(hex);
    selectionPanel == "B" ? setStyle({ backgroundColor: hex }) : setStyle({ color: hex });
  };
  return (
    <div className="palatte">
      <div className="main_container">
        <div className="row">
          <CancelPresentationRoundedIcon className="close_icon" onClick={props.openPalette_} />
        </div>
        <div className="row selection_panel">
          <div className="column">
            <label htmlFor="background">Background</label>
            <input
              type="radio"
              name="color"
              id="background"
              value="B"
              onChange={() => setSelectionPanel("B")}
              checked={selectionPanel == "B"}
            />
          </div>
          <div className="column">
            <label htmlFor="textColor">TextColor</label>
            <input
              type="radio"
              value="F"
              name="color"
              id="textColor"
              onChange={() => setSelectionPanel("F")}
              checked={selectionPanel == "F"}
            />
          </div>
        </div>
        <div className="row">
          <div className="column">
            <label htmlFor="red">Red</label>{" "}
          </div>
          <div className="column">
            <input type="range" name="red" id="0" min="0" value={rgb[0]} max="255" step="1" onChange={(e) => onSliderUpdate(e, "0")} />
          </div>
        </div>
        <div className="row">
          <div className="column">
            <label htmlFor="green">Green</label>{" "}
          </div>
          <div className="column">
            <input type="range" name="green" id="1" min="0" value={rgb[1]} max="255" step="1" onChange={onSliderUpdate} />
          </div>
        </div>
        <div className="row">
          <div className="column">
            <label htmlFor="blue">Blue</label>{" "}
          </div>

          <div className="column">
            <input type="range" name="blue" id="2" min="0" value={rgb[2]} max="255" step="1" onChange={onSliderUpdate} />
          </div>
        </div>
        <div className="row">
          <div className="palette_block" style={style}>
            {hexValue}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Palette;
