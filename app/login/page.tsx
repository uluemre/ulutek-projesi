import React from 'react'
import './login.css'
import InputField from '../../components/login/InputFields'


function Login() {
    return (
        <form className='login'>
            <h1>Welcome Login Panel</h1>
            {/* <img src="..\src\assets\user.png" width={100} height={100} alt="sads" /> */}
            <img src="\images\Name.png" width={120} height={120} alt="sads" />
            <InputField />

        </form>
    );
}

export default Login