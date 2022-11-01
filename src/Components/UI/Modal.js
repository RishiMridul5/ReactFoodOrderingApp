import ReactDOM from "react-dom";

import style from "./Modal.module.css";

const Modal = (props) => {
  const BackDrop = () => {
    return <div className={style.backDrop}>sdsadad</div>;
  };
  const OverLay = ({ children }) => {
    return <div className={style.modal}>{children}</div>;
  };
  const modalPortalPoint = document.getElementById("overlays");
  return (
    <>
      {ReactDOM.createPortal(<BackDrop />, modalPortalPoint)}

      {ReactDOM.createPortal(
        <OverLay>{props.children}</OverLay>,
        modalPortalPoint
      )}
    </>
  );
};

export default Modal;
