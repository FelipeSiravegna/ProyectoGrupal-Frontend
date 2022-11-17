import React, { useEffect } from 'react'
import NavbarP from '../NavbarP/NavbarP'
import style from './WatchList.module.css'
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import { getAllMovies } from '../../redux/actions';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const WatchList = () => {

    let peliculas = useSelector(state => (state.movies))
    let pagina = useSelector(state => (state.page))

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getAllMovies(pagina || 1));
    }, [])

  return (
    <div className={style.fondo} >
    <NavbarP />
    <div className={style.titulo}>
    <div><h1>WATCH LIST</h1></div>
    <div className={style.icono}><AccessTimeIcon fontSize='large' /></div>
    </div>

    <div className={style.gridcontainer}>
                                
                                {
                                    peliculas.length !== 0 && peliculas.rows.map(e => {

                        return <div className={style.griditem}>
                            <Link className={style.linkPel} to={`/filmdetails/${e.id}`}>
                            <img className={style.griditemImg} key = {e.id} src = {e.image} />
                            <h4 className={style.nameMovieP}>{e.name}</h4>
                            </Link>
                        </div>
                                    })
                                }

                        </div>
    </div>
  )
}

export default WatchList