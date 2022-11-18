import React, { Component } from 'react';
import Header from './Header'
import Noticias from './Noticias'
import NavbarP from '../NavbarP/NavbarP';

class News extends Component {
  state = {
    noticias: []
  }

  componentDidMount() {
    this.consultaNoticias();
  }

  consultaNoticias = () => {
    let url = 'https://api.themoviedb.org/3/discover/movie?api_key=756e1622851086c3d011b8461693b962&language=en-EN&sort_by=popularity.desc'

    fetch(url)
      .then(respuesta => {
        return respuesta.json()
      })
      .then(noticias => {
        this.setState({
          noticias: noticias.results
        })
      })
  }

  render() {
    return (
      <div>
        <NavbarP />
        <div className='daleluis'>
          <div className='container'>
            <Header />
            <Noticias
              noticias={this.state.noticias} />
          </div>
        </div>
      </div>
    )
  }
}

export default News