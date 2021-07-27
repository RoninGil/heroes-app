import React from 'react'

export const LoginPage = ({history}) => {

    const handleLogin = () =>{ 
        history.replace('/')
        //history.push('/')
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
