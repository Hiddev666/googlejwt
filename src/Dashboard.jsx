import { useEffect, useState } from "react"
import axios from "axios"
import Cookies from "js-cookie"

axios.defaults.withCredentials = true

export default function Dashboard() {
    const [user, setUser] = useState(null)

    useEffect(() => {
        let token = Cookies.get("token")
        console.log(token)
        axios.defaults.headers.common['Authorization'] = `Bearer ${token}`
        axios.get(`${import.meta.env.VITE_API_URL}/api/user`)
            .then(res => {
                setUser(res.data)
                console.log(res.data)
            })
            .catch(err => console.log(err))
    }, [])

    const handleLogout = () => {
        window.location.href = `${import.meta.env.VITE_API_URL}/logout`
    }

    if (!user) return <p>Loading...</p>

    return (
        <div style={{ textAlign: "center", marginTop: 100 }}>
            <img src={user.profile_picture} alt={user.profile_picture}/>
            <h1>Welcome, {user.displayName} 🎉</h1>
            <p>Email: {user.email}</p>
            <button onClick={handleLogout}>Logout</button>
        </div>
    )
}
