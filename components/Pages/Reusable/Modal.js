export default function Modal({
  children,
  isVisible,
  setIsContactModalVisible,
}) {
  return (
    <div
      className="modalBg"
      style={{
        display: !isVisible ? "none" : "",
      }}
      onClick={() => {
        setIsContactModalVisible(false);
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
              setIsContactModalVisible(false);
            }}
          />
        </div>
        <div className="modalBody">{children}</div>
      </div>
    </div>
  );
}
