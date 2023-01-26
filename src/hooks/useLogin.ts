import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setUser, removeUser, setLoading } from "../slices/UserSlice";
import { RootState } from "../store";

export const useLogin = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const isLoading = useSelector((state: RootState) => state.user.isLoading);

    const logInUser = (user: any) => {
        if (user?.userName === 'alejandro' && user?.password === 'alejandro123') {
            dispatch(setLoading(true));
            setTimeout(() => {
                dispatch(setUser(user));
                dispatch(setLoading(false));
                localStorage.setItem('user', JSON.stringify(user));
                navigate('home', {replace: true});
            }, 2000);
          } else {
            alert('Ooopss!! please introduce correct user data :)')
        }
    };

    const logOutUser = () => {
        dispatch(removeUser());
        localStorage.removeItem('user')
        navigate('/', {replace: true});
    }  

    return {
        logInUser,
        logOutUser,
        isLoading
    }
    
}