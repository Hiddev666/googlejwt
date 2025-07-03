export default function Home() {
    const handleLogin = () => {
        window.location.href = `${import.meta.env.VITE_API_URL}/auth/google`
    }

    return (
        <div style={{ textAlign: "center", marginTop: 100 }}>
            <h1>Login Page</h1>
            <button onClick={handleLogin}>Login with Google 🚀</button>
        </div>
    )
}
