import './grilla-personajes.css';
import TarjetaPersonaje from './tarjeta-personaje.componente';
import { Character } from "../../interfaces/character";


/**
 * @typedef {Object} Props
 * @property {Character[]} data
 * 
 * @param {Props} props 
 * @returns {JSX.Element} 
 */

interface Props {
	data: Character[];
}

const GrillaPersonajes = ({ data }: Props): JSX.Element => {
    const personajes = data.map((element) => (
      <TarjetaPersonaje key={element.id} character={element} />
    ));
  
    return <div className="grilla-personajes">{personajes}</div>;
  };
 
export default GrillaPersonajes;