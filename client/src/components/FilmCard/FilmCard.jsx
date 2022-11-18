import { Link } from 'react-router-dom'
import './FilmCard.css'

const FilmCard = ({ img, id }) => {
    return (
        <Link to={`/filmdetails/${id}`}>
            <div className='Cardback'>
                <div className='Imagen'>
                    <img className='Imagen' src={img} alt={"IMG NOT FOUND"} />
                </div>
            </div>
        </Link>
    )
}

export default FilmCard