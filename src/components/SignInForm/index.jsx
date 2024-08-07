
import {useNavigate } from 'react-router-dom';
import './SignInForm.css';
import { useState } from 'react';
import useFetchPostLogin from '../../hook/useFetchPostLogin';

function SignInForm() {
    const { Login, isloaging: isLoadingLogin, error: errorLogin } = useFetchPostLogin();
    const [submitButtonDisabled, setSubmitButtonDisabled] = useState(true);
    const navigate = useNavigate()
    
    const handleUsernameChange = (e) => {
            const value = e.target.value;
            if (!value.includes('@')) {
                setSubmitButtonDisabled(true)
                alert('Username must contain an "@" character.');
            }
            else {
                setSubmitButtonDisabled(false);
            }
        };
    const handleSubmit = (event) => {
        event.preventDefault(); // Empêche le rechargement de la page
        const email = event.target.username.value
        const password = event.target.password.value;

        const payload = { email, password };
        // Appelez ici votre fonction hook avec le payload
        Login(payload).then(() => { 
            navigate("/user")
        })
    };
    
    return (
        <section className="sign-in-content">
            <i className="fa fa-user-circle sign-in-icon"></i>
            <h1>Sign In</h1>
            <form onSubmit={handleSubmit}>
                <div className="input-wrapper">
                    <label htmlFor="username">Username</label>
                    <input onChange={handleUsernameChange} name='username' type="text" id="username" />
                </div>
                <div className="input-wrapper">
                        <label htmlFor="password">Password</label>
                        <input type="password" name='password' id="password" />
                </div>
                {errorLogin && <p>nom d'utilisateur ou mot de passe incorrect</p>}
                <div className="input-remember">
                    <input type="checkbox" id="remember-me" />
                    <label htmlFor="remember-me">Remember me</label>
                </div>
                <button type="submit" disabled={submitButtonDisabled} className="sign-in-button">Sign In</button>
                {isLoadingLogin && <p>chargement</p>}
            </form>
        </section>
    )
}

export default SignInForm