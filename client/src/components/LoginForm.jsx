import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const LoginForm = () => {
    
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = async(e) => {
        e.preventDefault();
        const response = await fetch('http://localhost:9000/api/login', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({
                email,
                password
            })
        })
        const data = await response.json();
        if(data.user) {
           localStorage.setItem('token', data.user)
            // alert('Login successful');
            window.location.href = '/home'
        } else {
            alert('Please check your username and password')
        }
    }
  return (
    <div>
    <h1>LoginForm</h1>
    <form onSubmit={handleSubmit}>
        <div>
        <label htmlFor="email">Email: </label>
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)}/>
        </div>
        <div>
            <label htmlFor="password">Password: </label>
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)}/>
        </div>
        <input style={{ backgroundColor:"blueviolet", padding:"10px", borderRadius:"5px" }} type="submit" />
        <button><Link to="/">Register</Link></button>
    </form>
    </div>
  )
}

export default LoginForm