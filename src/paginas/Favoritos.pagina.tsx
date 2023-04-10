import GrillaPersonajes from "../componentes/personajes/grilla-personajes.componente";
import { removeAllFavourites } from "../redux/slices/favouritesSlice";
import { useAppDispatch, useAppSelector } from "../redux/hooks";

/**
 * @returns {JSX.Element}
 */

const PaginaFavoritos = (): JSX.Element => {
	const favourites = useAppSelector((state) => state.favourites);
	const dispatch = useAppDispatch();
	const remove = () => {
		dispatch(removeAllFavourites());
	};
	return (
		<div className="container">
			<div className="actions">
				<h3>Personajes Favoritos</h3>
				<button onClick={remove} className="danger">
					Eliminar los favoritos
				</button>
			</div>
			<GrillaPersonajes data={favourites.favoritos} />
		</div>
	);
};

export default PaginaFavoritos;