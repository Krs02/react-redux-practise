import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { triggerBGChange, triggerTextChange } from "./Action";
import { decToHex } from "../../Utility";
import "./style.scss";
function Palette(props) {
  const [rgb, setRgb] = useState({ R: 0, G: 0, B: 0 });
  const [hexValue, setHexValue] = useState("");
  const [style, setStyle] = useState({
    backgroundColor: "white",
    color: "black",
  });
  const [applyOption, setApplyOption] = useState("B");
  const dispatch = useDispatch();
  const captureCode = (event) => {
    const colorName = event.currentTarget.name;
    const colorValue = event.currentTarget.value;
    setRgb((prevRgb) => {
      return { ...prevRgb, [colorName]: colorValue };
    });
  };
  useEffect(() => {
    console.log(`style component updated`);
    //dispatch action frrom here to store for Style variable.
    applyOption == "B" ? dispatch(triggerBGChange(Object.values(rgb))) : dispatch(triggerTextChange(Object.values(rgb)));
    //sample box render
    let hexValue = decToHex(Object.values(rgb));
    setStyle((prevStyle) => {
      return { ...prevStyle, backgroundColor: hexValue };
    });
    setHexValue(hexValue);
  }, [rgb]);
  const updateColor = (e) => {
    console.log("Update Color Trigger");
    applyOption == "B" ? dispatch(triggerBGChange(Object.values(rgb))) : dispatch(triggerTextChange(Object.values(rgb)));
  };
  return (
    <div className="palette">
      <div className="palette_container">
        <div className="form_element">
          <div className="row">
            <div className="column">
              <label htmlFor="background">Background</label>
              <input
                type="radio"
                value="B"
                name="colortype"
                id="background"
                checked={applyOption == "B"}
                onChange={() => setApplyOption("B")}
              />
            </div>
            <div className="column">
              <label htmlFor="textcolor">Text Color</label>
              <input
                type="radio"
                value="F"
                name="colortype"
                id="textcolor"
                checked={applyOption == "F"}
                onChange={() => setApplyOption("F")}
              />
            </div>
          </div>
          <div className="row">
            <div className="column">
              <label htmlFor="Red">Red#{rgb.R}</label>
              <input type="range" id="Red" name="R" value={rgb.R} min="1" max="255" step="1" onChange={captureCode} />
            </div>
          </div>
          <div className="row">
            <div className="column">
              <label htmlFor="Green">Green#{rgb.G}</label>
              <input type="range" id="Green" name="G" min="1" value={rgb.G} max="255" step="1" onChange={captureCode} />
            </div>
          </div>
          <div className="row">
            <div className="column">
              <label htmlFor="Blue">Blue#{rgb.B}</label>
              <input type="range" id="Blue" name="B" min="1" value={rgb.B} max="255" step="1" onChange={captureCode} />
            </div>
          </div>
          {/* <div className="row">
            <div className="column">
              <input type="button" value="UpdateColor" onClick={updateColor} />
            </div>
          </div> */}
          <div className="row">
            <div className="column">
              <div className="sample_color_container" style={style}></div>
              <b>{hexValue}</b>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Palette;
