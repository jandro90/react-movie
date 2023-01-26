
import { Navigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setUser } from '../slices/UserSlice';

export const UserGuard = ({children}: any) => {  
    const dispatch = useDispatch();
    const isUserOnStorage = localStorage.getItem('user');
    
    if (isUserOnStorage) {
        dispatch(setUser(JSON.parse(isUserOnStorage)));
        return children;
    }
     else {
        return <Navigate to="/" replace />;
    }

}

export default UserGuard;