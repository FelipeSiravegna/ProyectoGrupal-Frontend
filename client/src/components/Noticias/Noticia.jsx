import React from 'react';

const Noticia = (props) => {

    const { url, author, title, urlToImage, content} = props.noticia

    return (

      <div className = 'col-md-4'>
            <div>
                <div className='card'>
                    <img className='card-img-top' src={urlToImage} alt={title} />
                    <h6 className='card-title'>{author}</h6>
                    <div className='card-body'>
                        <h5 className='card-title'>{title}</h5>
                        <p className='card-text'>{content}</p>
                        <a href = {url} className = 'btn btn-prymary'>Leer mas..</a>
                    </div>
                </div>
            </div>
      </div>
    )
}
export default Noticia;