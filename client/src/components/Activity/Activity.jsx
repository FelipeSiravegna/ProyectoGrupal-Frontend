import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getActivity } from '../../redux/actions';
import NavbarP from '../NavbarP/NavbarP';
import { NavLink } from 'react-router-dom';
import s from './Activity.module.css'

export default function Activity() {
    const dbUser = useSelector(state => state.user);
    const activity = useSelector(state => state.activity);

    const loggedUser = parseInt(localStorage.id);
    const dispatch = useDispatch();

    const showActivity = () => {
        console.log(activity);
    }

    useEffect(() => {
        dispatch(getActivity(loggedUser));
        showActivity();
    }, [])


    if (dbUser !== null) {
        return (
            <div className={s.fondo}>
                <NavbarP />
                {
                    activity.length > 0
                        ?
                        <div>
                            <h1 className={s.activityHeader}>ACTIVITY</h1>
                            <div className={s.container}>
                                <div className={s.allP}>
                                    {activity.map(act => {
                                        if (act.type === "review") {
                                            return <pre className={s.activityP}>✏<NavLink to={`/userProfile/${act.userId}`} className={s.textDecorationName}>{act.userName}</NavLink> reviewed the movie <NavLink to={`/filmdetails/${act.movieId}`} className={s.textDecorationMovie}>{act.movieName}</NavLink>✏</pre>
                                        } else {
                                            return <pre className={s.activityP}>📃<NavLink to={`/userProfile/${act.userId}`} className={s.textDecorationName}>{act.userName}</NavLink> created the list called <NavLink to={`/list/${act.id}`} className={s.textDecorationList}>{act.name}</NavLink>📃</pre>
                                        }

                                    })}
                                </div>
                            </div>
                        </div>
                        :
                        <div>
                            <h1 className={s.activityHeader}>THERE IS NO ACTIVITY</h1>
                        </div>
                }
            </div>
        )
    }
}