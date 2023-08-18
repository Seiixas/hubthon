import whatsapp from "../assets/images/whatsapp.png";

export const Whatsapp = () => {
  return (
    <div
      style={{
        position: "absolute",
        bottom: "2rem",
        right: "17rem",
        width: "3rem",
        height: "4rem",
        display: 'flex',
        alignItems: 'center',
        gap: '1rem',
        cursor: 'pointer',
      }}
    >
      <p style={{ whiteSpace: 'nowrap', fontSize: '1.2rem' }}>Não encontrei meu local!</p>
      <img  src={whatsapp} />
    </div>
  );
};
