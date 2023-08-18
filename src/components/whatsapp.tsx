import whatsapp from "../assets/images/whatsapp.png";

export const Whatsapp = () => {
  return (
    <div
      style={{
        position: "absolute",
        bottom: "1rem",
        right: "1rem",
        width: "18  rem",
        height: "4rem",
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '1rem',
        cursor: 'pointer',
        padding: '.5rem 1rem',
        borderRadius: '1rem',
        background: '#00000011',
      }}
    >
      <p style={{ fontSize: '1rem' }}>Não encontrei meu local!</p>
      <img  src={whatsapp} style={{ width: '2rem', height: '2rem' }} />
    </div>
  );
};
