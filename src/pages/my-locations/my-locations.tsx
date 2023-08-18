import { LocationItem } from "../../components/LocationItem";
import { SideMenu } from "../../components/SideMenu";

const locationsMocked = [
  {
    id: 0,
    name: 'Nome do local',
    address: 'Rua do Fulano, 456 - Bairro - Cidade - ESTADO',
    phone: '(85) 98888-0283',
    website: 'meusite.com.br',
    email: 'meuemail@gmail.com'
  },
  {
    id: 1,
    name: 'Nome do local',
    address: 'Rua do Fulano, 456 - Bairro - Cidade - ESTADO',
    phone: '(85) 98888-0283'
  },

]

export function MyLocations() {
  return (
    <>
      <SideMenu />
      <div style={{ display: 'grid', gap: '1rem'}}>
      {locationsMocked.map(location => (
        <LocationItem
          name={location.name}
          address={location.address}
          phone={location.phone}
          website={location.website}
          email={location.email}
        />
      ))}
      </div>
    </>
  );
}
