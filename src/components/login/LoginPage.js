import React, { useContext, useReducer } from 'react';
import { AuthContext } from '../../auth/AuthContext';
import { types } from '../../types/types';

export const LoginPage = ({history}) => {

    const {dispatch} = useContext(AuthContext)
    const handleLogin = () =>{ 
        dispatch({
            type: types.login,
            payload: {
                name: 'Carlos'
            }
        })
        history.replace(localStorage.getItem('lastPath'));
    }

    return (
        <div className="container mt-5">
            <h1>Login Page</h1>
            <hr/>

            <button
            className="btn btn-primary"
            onClick={handleLogin}
            >
                LogIn
            </button>
        </div>
    )
}
