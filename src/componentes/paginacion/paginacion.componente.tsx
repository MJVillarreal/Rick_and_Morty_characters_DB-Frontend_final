import './paginacion.css';
import { useMemo } from "react";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { nextPage, previousPage } from "../../redux/slices/pagesSlice";

const Paginacion = () => {
  const dispatch = useAppDispatch();
  const characterName = useAppSelector(state => state.getCharacterName.characterName);
  const max = useMemo(() => {
    if (!characterName) return 1;
    return characterName.info?.pages ?? 1;
  }, [characterName]);
  const currentPage = useAppSelector(state => state.page.value);

  const increment = () => {
    dispatch(nextPage());
  };

  const decrement = () => {
    dispatch(previousPage());
  };

  return (
    <div className="paginacion">
      <button
        className="primary"
        disabled={currentPage === 1}
        onClick={decrement}
      >
        Anterior
      </button>
      <button
        className="primary"
        disabled={currentPage === max}
        onClick={increment}
      >
        Siguiente
      </button>
    </div>
  );
};

export default Paginacion;

