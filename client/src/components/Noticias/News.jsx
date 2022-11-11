
import React, {Component} from 'react';
import Header from './Header'
import Noticias from './Noticias'

//https://newsapi.org/v2/top-headlines?country=de&category=business&apikey=63d551b6944e439888e91bf83ccda75f


class News extends Component {
    state = {
      noticias : []
    }

    componentDidMount() { 
    this.consultaNoticias();
    }

    consultaNoticias = () => {
        let url = 'https://api.themoviedb.org/3/discover/movie?api_key=756e1622851086c3d011b8461693b962&language=es-ES&sort_by=popularity.desc'

            fetch(url)
               .then(respuesta => {
                    return respuesta.json()
               })
               .then(noticias => {
                //console.log(noticias)
                  this.setState({
                    noticias: noticias.results
                  })
               })

    }
    render() {
        return(
            <div className='container'>
                <Header/>
                <Noticias 
                  noticias = {this.state.noticias} />
                 
            </div>
        )
    }
}

export default News