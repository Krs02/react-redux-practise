import React, { useEffect } from "react";
import "./style.scss";
import CloseSharpIcon from "@mui/icons-material/CloseSharp";
import { createPortal } from "react-dom";

const modalRoot = document.getElementById("modal-root");
var element = document.createElement("div");

function Modal(props) {
  useEffect(() => {
    modalRoot.appendChild(element);
    return () => {
      modalRoot.removeChild(element);
    };
  }, []);
  const closeEvent = (event) => {
    console.log("Close Event Captured");
    props.closeEvent();
  };
  return createPortal(
    <div className="modal__root" onClick={closeEvent}>
      <div
        className="modal__root__container"
        onClick={(event) => {
          return event.stopPropagation();
        }}
      >
        <div className="form__row__item">
          {/* <h3>{"Modal Title"}</h3> */}
          <CloseSharpIcon className="modal-close" id={props.children && props.children.name} onClick={closeEvent} />
        </div>
        <div className="form__row__item">{props.children}</div>
      </div>
    </div>,
    element
  );
}
export default Modal;
