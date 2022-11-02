import ReactDOM from "react-dom";
import style from "./Modal.module.css";

import ModalBackDrop from "./ModalBackDrop";
const Modal = (props) => {
  const OverLay = ({ children }) => {
    return <div className={style.overLay}>{children}</div>;
  };
  const modalPortalPoint = document.getElementById("overlays");
  return (
    <>
      {ReactDOM.createPortal(<ModalBackDrop />, modalPortalPoint)}
      {ReactDOM.createPortal(
        <OverLay>{props.children}</OverLay>,
        modalPortalPoint
      )}
    </>
  );
};

export default Modal;
