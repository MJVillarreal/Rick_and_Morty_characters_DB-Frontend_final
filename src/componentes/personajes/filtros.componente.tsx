import { RefObject, useEffect, useState } from "react";
import "./filtros.css";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { getCharacterName } from "../../redux/slices/getCharacterNameSlice";
import { reset } from "../../redux/slices/pagesSlice";

interface Props {
	filterRef: RefObject<HTMLInputElement>;
}

/**
 * @typedef {Object} Props
 * @property {RefObject<HTMLInputElement>} filterRef 
 */

/**
 * @param {Props} props
 * @returns {JSX.Element} 
 */

const Filtros = ({ filterRef }: Props): JSX.Element => {

	const dispatch = useAppDispatch();
	const getCount = useAppSelector((state) => state.page.value);
	const [getName, setName] = useState<string>("");

	useEffect(() => {
		dispatch(getCharacterName({ name: "", page: 1 }));
	}, [dispatch]);

	useEffect(() => {
		dispatch(getCharacterName({ name: getName, page: getCount }));
	}, [getCount, dispatch, getName]);

	const handlerChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
		dispatch(reset());
		setName(e.target.value);
	};

	return (
		<div className="filtros">
			<label htmlFor="nombre">Filtrar por nombre :</label>
			<input
				type="text"
				placeholder="Rick, Morty, Beth, Alien, ...etc"
				name="nombre"
				onChange={handlerChange}
				ref={filterRef}
			/>
		</div>
	);
};

export default Filtros;