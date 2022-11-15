import { useEffect } from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { getActivity } from '../../redux/actions';

export default function Activity(){

    const dispatch = useDispatch();

    const dbUser = useSelector(state => state.user);
    const activity = useSelector(state => state.activity);
    const followingUsers = dbUser.following;

    useEffect(() => {
        dispatch(getActivity(followingUsers));
    }, [])

    return(
        <div>
            {
                activity.length > 0 
                ?
                <div>
                    <h1>Activity</h1>
                </div>
                :
                <div>
                    <h1>No hay actividad</h1>
                </div>
            }
        </div>        
    )
}