import { useDispatch } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { setUser } from '../slices/UserSlice';

const LoginGuard = ({children}: any) => {
    const dispatch = useDispatch();
    const isUserOnStorage = localStorage.getItem('user');
    
    if (isUserOnStorage) {
        dispatch(setUser(JSON.parse(isUserOnStorage)));
        return <Navigate to="/app/home" replace />;
    }
     else {
        return children
    }
}

export default LoginGuard;