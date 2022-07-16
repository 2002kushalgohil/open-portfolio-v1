export default function Modal({ children, isModalVisible, setIsModalVisible }) {
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
