
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
        let url = 'https://newsapi.org/v2/top-headlines?country=de&category=business&apikey=63d551b6944e439888e91bf83ccda75f'

            fetch(url)
               .then(respuesta => {
                    return respuesta.json()
               })
               .then(noticias => {
                console.log(noticias)
                  this.setState({
                    noticias: noticias.articles
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