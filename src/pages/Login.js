import { useState } from "react"
import { useLogin } from "../hooks/useLogin"
import { Link } from 'react-router-dom'


const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const {login, error, isLoading} = useLogin()

  const handleSubmit = async (e) => {
    e.preventDefault()

    await login(email, password)
  }

  return (

    <div className="login">
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <h1 className="landing-title">Welcome Back!</h1>
          <p className="landing-text">Continue Planning Your Journeys</p>
        </div>
        <div className="col-md-6">
    <form className="login" onSubmit={handleSubmit}>
      
      <h2>Log In</h2>
      <label>Email address:</label>
      <input 
        type="email" 
        onChange={(e) => setEmail(e.target.value)} 
        value={email} 
      />
      <label>Password:</label>
      <input 
        type="password" 
        onChange={(e) => setPassword(e.target.value)} 
        value={password} 
      />

      <button disabled={isLoading} type="submit">Log in</button>
      {error && <div className="error">{error}</div>}

      <p>Dont Have an Account? <u><Link to="/Signup">Sign Up Here</Link></u></p>

    </form>
    </div>
    </div>
    </div>
    </div>
    
  )
}

export default Login