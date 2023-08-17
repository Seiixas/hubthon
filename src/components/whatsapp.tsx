import whatsapp from "../assets/images/whatsapp.png";

export const Whatsapp = () => {
  return (
    <div
      style={{
        position: "absolute",
        bottom: "2rem",
        right: "2rem",
        width: "5rem",
        height: "5rem",
      }}
    >
      <img src={whatsapp} />
    </div>
  );
};
