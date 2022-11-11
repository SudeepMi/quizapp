import React from 'react'

const Signin = () => {
    return (
        <div className="siginin__container">
            <div className="signin">
                <div className="welcome">
                    <h1>Welcome</h1>
                    <i className="ri-shield-keyhole-line"></i>
                </div>
                <div className="inputs">
                    <input type="email" placeholder='Enter Email'/>
                    <input type="password" placeholder='password'/>
                </div>
                <button>Login</button>

            </div>
        </div>
    )
}

export default Signin