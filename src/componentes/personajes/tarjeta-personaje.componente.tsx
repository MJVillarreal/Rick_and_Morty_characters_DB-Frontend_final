import BotonFavorito from '../botones/boton-favorito.componente';
import './tarjeta-personaje.css';
import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import {
	removeFavourite,
	addFavourite,
} from "../../redux/slices/favouritesSlice";
import { Character } from "../../interfaces/character";

interface Props {
	character: Character;
}

const TarjetaPersonaje = ({ character }: Props) => {
	const favourites = useAppSelector((state) => state.favourites);
	const dispatch = useAppDispatch();
	const [fav, setFav] = useState(false);

	const guardar = () => {
		if (fav === false) {
			setFav(true);
			dispatch(
				addFavourite({
					id: character.id,
					name: character.name,
					image: character.image,
					status: "",
					species: "",
					type: "",
					gender: "",
					origin: {
						name: "",
						url: "",
					},
					location: {
						name: "",
						url: "",
					},
					episode: [],
					url: "",
					created: "",
				})
			);
		} else {
			setFav(false);
			dispatch(removeFavourite(character.id));
		}
	};

	useEffect(() => {
		const esFavorito = favourites.favoritos.some((element) => element.id === character.id);
		setFav(esFavorito);
	}, [character, favourites]);

	const handleClick = () => {
		guardar();
	};

	return (
		<div className="tarjeta-personaje">
			<img src={character.image} alt={character.name} />
			<div className="tarjeta-personaje-body">
				<span>{character.name}</span>
				<div onClick={handleClick}>
					<BotonFavorito esFavorito={fav} />
				</div>
			</div>
		</div>
	);
};

export default TarjetaPersonaje;