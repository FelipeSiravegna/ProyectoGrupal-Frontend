import { Link } from 'react-router-dom'
import './FilmCard.css'


const FilmCard = ({name, img, id, rating }) => {

 return (
        
            
    <div className='Cardback'>
<Link to={`/filmdetails/${id}`}>

       
        <div className='Imagen'>
            <img width={190} height={230} src={img} alt={"IMG NOT FOUND"}/>
        </div>


        </Link>



    </div>
        
  )
}

export default FilmCard