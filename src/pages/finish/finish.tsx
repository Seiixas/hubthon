import { Button } from '@mui/material';
import Confetti from 'react-confetti';
import { useWindowSize } from 'react-use';

export const Finish = () => {
  const { width, height} = useWindowSize();

  return (
    <>
    <Confetti
      width={width}
      height={height}
    />
      <div style={{ maxWidth: '650px', textAlign: 'center'}}>
      <h1>Seja bem-vindo!</h1>
      <p>
        Os seus locais foram criados com sucesso! Agora verifique os seus locais navegando na nossa plataforma. 
      </p>
      <Button variant='contained' sx={{ fontSize: '1.5rem', fontWeight: 'bold', marginTop: '2rem' }}>
        Continuar
      </Button>
    </div>
    </>
  );
}