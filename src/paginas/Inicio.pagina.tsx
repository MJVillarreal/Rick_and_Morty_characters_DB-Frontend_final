import { FC, useRef } from "react";
import Filtros from "../componentes/personajes/filtros.componente"
import GrillaPersonajes from "../componentes/personajes/grilla-personajes.componente"
import Paginacion from "../componentes/paginacion/paginacion.componente";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { getCharacterName } from "../redux/slices/getCharacterNameSlice";
import { CharactersResponse } from "../interfaces/character";

const PaginaInicio: FC = () => {
	const { characterName, processing } = useAppSelector(
		(state) => state.getCharacterName
	) as { characterName: CharactersResponse; processing: boolean };
	const dispatch = useAppDispatch();
	const filterRef = useRef<HTMLInputElement>(null);

	const clearFilters = () => {
		if (filterRef.current) {
			dispatch(getCharacterName({ name: "", page: 1 }));
			filterRef.current.value = "";
		}
	};

	return (
		<div className="container">
			<div className="actions">
				<h3>Catálogo de Personajes</h3>
				<button className="danger" onClick={clearFilters}>
					Limpiar Filtros
				</button>
			</div>
			<Filtros filterRef={filterRef} />
			<Paginacion />
			{processing ? (
				<h1>Cargando...</h1>
			) : (
				characterName.results && <GrillaPersonajes data={characterName.results} />
			)}
			{characterName.error ? (
				<h1>Mientras tanto, en un universo alternativo, esto está lleno de contenido increíble</h1>
			) : (
				<Paginacion />
			)}
		</div>
	);
};

export default PaginaInicio;