import { NavLink } from 'react-router-dom';
import { useLogin } from '../hooks/useLogin';

export const NavBar = () => {
    const { logOutUser } = useLogin();

    return (
        <nav className="navbar navbar-expand navbar-dark bg-dark p-2 d-flex justify-content-between">
            <NavLink to="/app/home" replace={true} className="navbar-brand"> React Movie </NavLink>
                <ul className="navbar-nav">
                    <li className="nav-item active">
                        <NavLink to="/app/home" className={({ isActive }) =>  isActive ? 'nav-link active' : 'nav-link' }> Home </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/app/about" className={({ isActive }) =>  isActive ? 'nav-link active' : 'nav-link' }> About </NavLink>
                    </li>
                </ul>
                <button className='btn btn-danger' onClick={logOutUser}> Logout </button>
        </nav>
    );
};
