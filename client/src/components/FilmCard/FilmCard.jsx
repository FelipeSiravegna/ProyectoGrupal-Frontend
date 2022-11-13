import { Link } from 'react-router-dom'
import './FilmCard.css'

const FilmCard = ({ name, img, id, rating }) => {
    return (
        <Link to={`/filmdetails/${id}`}>
            <div className='Cardback'>
                <div className='Imagen'>
                    <img src={img} alt={"IMG NOT FOUND"} />
                </div>
            </div>
        </Link>
    )
}

export default FilmCard