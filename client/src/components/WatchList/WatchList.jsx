import React from 'react'
import NavbarP from '../NavbarP/NavbarP'
import style from './WatchList.module.css'
import AccessTimeIcon from '@mui/icons-material/AccessTime';

const WatchList = () => {
  return (
    <div className={style.fondo} >
    <NavbarP />
    <div className={style.titulo}>
    <div><h1>WATCH LIST</h1></div>
    <div className={style.icono}><AccessTimeIcon fontSize='large' /></div>
    </div>
    <div className={style.gridcontainer}>
                        <div>
                            <img className={style.griditem} src="https://image.tmdb.org/t/p/w600_and_h900_bestv2/tM0hpWw3GONam6TKcMMciecHjhT.jpg" alt="" />
                        </div>
                        <div>
                            <img className={style.griditem} src="https://image.tmdb.org/t/p/w600_and_h900_bestv2/xFw9RXKZDvevAGocgBK0zteto4U.jpg" alt="" />
                        </div>
                        <div>
                            <img className={style.griditem} src="https://image.tmdb.org/t/p/w600_and_h900_bestv2/rhr4y79GpxQF9IsfJItRXVaoGs4.jpg" alt="" />
                        </div>
                        <div>
                            <img className={style.griditem} src="https://image.tmdb.org/t/p/w600_and_h900_bestv2/tM0hpWw3GONam6TKcMMciecHjhT.jpg" alt="" />
                        </div>
                        <div>
                            <img className={style.griditem} src="https://image.tmdb.org/t/p/w600_and_h900_bestv2/xFw9RXKZDvevAGocgBK0zteto4U.jpg" alt="" />
                        </div>
                        <div>
                            <img className={style.griditem} src="https://image.tmdb.org/t/p/w600_and_h900_bestv2/xFw9RXKZDvevAGocgBK0zteto4U.jpg" alt="" />
                        </div>
                        <div>
                            <img className={style.griditem} src="https://image.tmdb.org/t/p/w600_and_h900_bestv2/xFw9RXKZDvevAGocgBK0zteto4U.jpg" alt="" />
                        </div>
                        <div>
                            <img className={style.griditem} src="https://image.tmdb.org/t/p/w600_and_h900_bestv2/rhr4y79GpxQF9IsfJItRXVaoGs4.jpg" alt="" />
                        </div>
                        <div>
                            <img className={style.griditem} src="https://image.tmdb.org/t/p/w600_and_h900_bestv2/tM0hpWw3GONam6TKcMMciecHjhT.jpg" alt="" />
                        </div>

                        </div>
    </div>
  )
}

export default WatchList