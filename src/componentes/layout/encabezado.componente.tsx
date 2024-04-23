import {Link} from "react-router-dom";
import './encabezado.css';

/**
 * @returns {JSX.Element}
 */
const Encabezado = () => {

    return <header>
            <div>
                <div>
                    <h2>Rick and Morty Character Search</h2>
                </div>
                <nav>
                    <ul>
                        <li><Link to="/">Inicio</Link></li>
                        <li><Link to="/favoritos">Favoritos</Link></li>
                    </ul>
                </nav>
            </div>
    </header>
}

export default Encabezado