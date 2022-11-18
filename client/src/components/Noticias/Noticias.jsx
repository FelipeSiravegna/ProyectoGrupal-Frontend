import Noticia from './Noticia'

//https://newsapi.org/v2/top-headlines?country=de&category=business&apikey=63d551b6944e439888e91bf83ccda75f

function News (props) {
        return(
            <div className='row'>
                {props.noticias.map (noticia => (
                    <Noticia key = {noticia.url} noticia = {noticia} />
                ))}
            </div>
        )
}

export default News