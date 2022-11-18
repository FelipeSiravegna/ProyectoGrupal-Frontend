import React from 'react'
import './CardCompare.css'

export const CardCompare = ({ name, rating, image, popularity, saves, language, length, releaseDate, pos }) => {
  return (
    <div className='contain'>
      <img className='imgCompare' src={image} alt="" />
      {pos === 'der' ?
        <h2 className='NombreD'>{name}</h2>
        : <h2 className='NombreI'>{name}</h2>}
      <div className='datos'>
        {pos === 'der' ?
          <div className='der'>
            <label className='label'>Popularity:</label>
            <br></br>
            <h5>| {popularity}</h5>
            <label className='label'>Languaje:</label>
            <br></br>
            <h5>| {language}</h5>
            <label className='label'>Duration:</label>
            <br></br>
            <h5>| {length} hr</h5>
            <label className='label2'>Rating:</label>
            <br></br>
            <h5>| {rating}</h5>
            <label className='label'>Premiere:</label>
            <br></br>
            <h5>| {releaseDate}</h5>
            <label className='label3'>Saves:</label>
            <br></br>
            <h5>| {saves}</h5>
          </div>
          :
          <div className='izq'>
            <br></br>
            <h5>{popularity}</h5>
            <br></br>
            <h5>{language}</h5>
            <br></br>
            <h5>{length} hr</h5>
            <br></br>
            <h5>{rating}</h5>
            <br></br>
            <h5>{releaseDate}</h5>
            <br></br>
            <h5>{saves}</h5>
          </div>
        }
      </div>
    </div>
  )
}