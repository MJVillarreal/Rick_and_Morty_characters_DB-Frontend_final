import './boton-favorito.css';
import { FC } from "react";

interface Props {
	esFavorito: boolean;
	onClick?: () => void;
}

/**
 * @param {Props} props 
 * @returns {JSX.Element}
 */
 
const BotonFavorito: FC<Props> = ({
	esFavorito,
	onClick,
}: Props): JSX.Element => {
    const src = esFavorito ? "/imagenes/star-filled.png" : "/imagenes/star.png"

    return <div className="boton-favorito" onClick={onClick}>
        <img src={src} alt={"favorito"} />
    </div>
}

export default BotonFavorito;