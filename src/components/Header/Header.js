import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';

const Header = () => {
    const { user, logoutUser } = useContext(AuthContext)

    const handleLogout = () => {
        logoutUser()
            .then(() => { })
            .catch(err => console.error(err))
    }

    const menu = <>
        <li><Link to='/home' >Home</Link></li>

        {!user?.uid &&
            <><li><Link to='/login'>Login</Link></li>
                <li><Link to='/register'>Register</Link></li></>
        }
    </>
    return (
        <div className='mb-5'>
            <div className="navbar bg-base-200 md:px-5 lg:px-8">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            {menu}
                        </ul>
                    </div>
                    <Link className="btn btn-ghost normal-case text-xl">All Users</Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {menu}
                    </ul>
                </div>
                <div className="navbar-end">
                    {user?.uid && <>
                        <div className="avatar">
                            <div className="w-8 rounded-full">
                                <img src="https://placeimg.com/192/192/people" />
                            </div>
                        </div>
                        <button onClick={handleLogout} className='btn btn-warning btn-sm md:ml-2'>Logout</button>
                    </>}
                </div>
            </div>
        </div>
    );
};

export default Header;