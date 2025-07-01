import React from 'react'

function RegisterForm() {
    return (

        <form className='register-container'>
            <h1 className='form-title'>Welcome Register Page</h1>
            <img src='\images\logo.png' width={150} height={150} className='logo' alt="asdsad" />
            <input className="input-style" type="text" placeholder='Username' name='username' />
            <input className="input-style" type="email" placeholder='Email' name='email' />
            <input className="input-style" type="password" placeholder='Password' name='password' />

            <input className='button-style' type="submit" value="Kayıt Ol" />
            <p>Zaten Hesabım Var <a className="login-link" href='/login'>Giriş Yap</a></p>
        </form>
    );
}

export default RegisterForm