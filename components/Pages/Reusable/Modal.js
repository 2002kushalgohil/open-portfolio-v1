import Image from "next/image";
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
        display: isModalVisible ? "flex" : "none",
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
          <Image
            src="/icons/Cancel.svg"
            onClick={() => {
              setIsModalVisible(false);
            }}
            width={30}
            height={30}
            alt="Cancel"
          />
        </div>
        <div className="modalBody">{children}</div>
      </div>
    </div>
  );
}
