import React, { useEffect } from 'react'
import NavbarP from '../NavbarP/NavbarP'
import style from './WatchList.module.css'
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import { getAllMovies } from '../../redux/actions';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { useState } from 'react';

const WatchList = () => {

  let data = localStorage.mov && JSON.parse(localStorage.mov).concat(localStorage.mov8 && JSON.parse(localStorage.mov8).concat(localStorage.mov9 && JSON.parse(localStorage.mov9)).concat(localStorage.mov10 && JSON.parse(localStorage.mov10)).concat(localStorage.mov11 && JSON.parse(localStorage.mov11)).concat(localStorage.mov12 && JSON.parse(localStorage.mov12)).concat(localStorage.mov13 && JSON.parse(localStorage.mov13)).concat(localStorage.mov14 && JSON.parse(localStorage.mov14)).concat(localStorage.mov15 && JSON.parse(localStorage.mov15)).concat(localStorage.mov16 && JSON.parse(localStorage.mov16)).concat(localStorage.mov17 && JSON.parse(localStorage.mov17)).concat(localStorage.mov18 && JSON.parse(localStorage.mov18)).concat(localStorage.mov19 && JSON.parse(localStorage.mov19)).concat(localStorage.mov20 && JSON.parse(localStorage.mov20)).concat(localStorage.mov21 && JSON.parse(localStorage.mov21)).concat(localStorage.mov23 && JSON.parse(localStorage.mov23)).concat(localStorage.mov24 && JSON.parse(localStorage.mov24)).concat(localStorage.mov29 && JSON.parse(localStorage.mov29)).concat(localStorage.mov30 && JSON.parse(localStorage.mov30)).concat(localStorage.mov31 && JSON.parse(localStorage.mov31)).concat(localStorage.mov32 && JSON.parse(localStorage.mov32)).concat(localStorage.mov33 && JSON.parse(localStorage.mov33)).concat(localStorage.mov34 && JSON.parse(localStorage.mov34)).concat(localStorage.mov35 && JSON.parse(localStorage.mov35)).concat(localStorage.mov36 && JSON.parse(localStorage.mov36)).concat(localStorage.mov37 && JSON.parse(localStorage.mov37)).concat(localStorage.mov38 && JSON.parse(localStorage.mov38)).concat(localStorage.mov39 && JSON.parse(localStorage.mov39)).concat(localStorage.mov40 && JSON.parse(localStorage.mov40)))
  let dataLimpia = data !== undefined && data.filter(e => e !== undefined)
  const [watch, setWatch] = useState();
  console.log(watch)

  useEffect(() => {

  if(dataLimpia){

    let set =  new Set( dataLimpia.map( JSON.stringify ) )
    let arrSinDuplicaciones = Array.from( set ).map( JSON.parse );
    setWatch(arrSinDuplicaciones)
  }

},[])


  return (
    <div className={style.fondo} >
    <NavbarP />
    <div className={style.titulo}>
    <div><h1>WATCH LIST</h1></div>
    <div className={style.icono}><AccessTimeIcon fontSize='large' /></div>
    </div>

    <div className={style.gridcontainer}>
                {                
    watch !== undefined ? watch.map(e => {

    return <div className={style.griditem}>
    <Link className={style.linkPel} to={`/filmdetails/${e.id}`}>
                            <img className={style.griditemImg} key = {e.id} src = {e.image} />
                            <h4 className={style.nameMovieP}>{e.name}</h4>
                            </Link>
                        </div>
                                    })
                                    :
                                    <div className={style.nolistas}>
                                    <h1>you don't have wach list</h1>
                                    </div>
                                    }

                        </div>
    </div>
  )
}

export default WatchList