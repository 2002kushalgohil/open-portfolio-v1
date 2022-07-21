import { useEffect } from "react";

export default function Modal({ children, isModalVisible, setIsModalVisible }) {
  useEffect(() => {
    if (isModalVisible) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [isModalVisible]);

  return (
    <div
      className="modalBg"
      style={{
        display: !isModalVisible ? "none" : "flex",
      }}
      onClick={() => {
        setIsModalVisible(false);
      }}
    >
      <div
        className="modal"
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <div className="modalTopDiv">
          <img
            src="/icons/Cancel.svg"
            onClick={() => {
              setIsModalVisible(false);
            }}
          />
        </div>
        <div className="modalBody">{children}</div>
      </div>
    </div>
  );
}
