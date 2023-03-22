import React, { useEffect } from 'react'
import { useNavigate }  from 'react-router-dom'
import { decodeToken } from "react-jwt";

const Home = () => {
    const navigate = useNavigate()

    async function populateQuote() {
        // console.log(localStorage.getItem('token'))
        const req = await fetch('http://localhost:9000/api/home', {
            headers: {
                'x-access-token': localStorage.getItem('token')
            }
        }).then(response => console.log(response))
        // const data = req.json()
        // console.log(data)
        // const data = await req.json()
        // console.log(data)
    }

    useEffect(() => {
        const token = localStorage.getItem('token');
        if(token) {
            const user = decodeToken(token)
            if(!user) {
                localStorage.removeItem('token')
                navigate('/login')
            } else {
                populateQuote()
            } 
        }
    }, [])
  return (
    <div>Home</div>
  )
}

export default Home