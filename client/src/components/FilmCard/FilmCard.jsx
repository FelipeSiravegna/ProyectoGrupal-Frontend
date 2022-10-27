import { Link } from 'react-router-dom'
import './FilmCard.css'


const FilmCard = ({name, img, id, rating }) => {

 return (
        
            
    <div className='Cardback'>
<Link to={`/details/${id}`}>
        <div className="Nombre">
            <span >{name}</span>
        </div>
       
        <div className='Imagen'>
            <img width={275} height={175} src={img} alt={"IMG NOT FOUND"}/>
        </div>

<br/>
        <div className='Rating'>
            <p>⭐{rating}</p>
                  
        </div>
        </Link>



    </div>
        
  )
}

export default FilmCard