/* eslint-disable jsx-a11y/alt-text */
import './style.css';
import Valorant from '../../images/valorant.avif';
import { Link } from 'react-router-dom';

export default function Home() {
    return <div className='body'>
        <h1>
            Descubra mais sobre o universo de Valorant aqui
        </h1>

        <img src={Valorant} />

        <div className='buttons'>
            <button>
                <Link to="/Char">
                    Personagens
                </Link>
            </button>

            <button>
                <Link to="/Skins">
                    Skins
                </Link>
            </button>

            <button>Armas</button>

            <button>Habilidades</button>

            <button>Mapas</button>

            <button>Ranks</button>

        </div>

    </div>
}