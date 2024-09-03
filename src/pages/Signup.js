import { useState } from "react"
import { useSignup } from "../hooks/useSignup"
import { Link } from 'react-router-dom'


const Signup = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const {signup, error, isLoading} = useSignup()

  const handleSubmit = async (e) => {
    e.preventDefault()

    await signup(email, password)
  }

  return (

    <div className="login">
    <div className="container">
      <div className="row">
        <div className="col-md-6">
        <h2 className="landing-title">Your Dream Journey Starts Here!</h2>
          <p className="landing-text">Forget the stress of travelling with our new platform ready to store all your information and files</p>
          
        </div>
        <div className="col-md-6">
    <form className="signup" onSubmit={handleSubmit}>
      <h2>Sign Up</h2>
      
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

      <button disabled={isLoading}>Sign up</button>
      {error && <div className="error">{error}</div>}

      <p>Have an Account? <u><Link to="/Login">Log In Here</Link></u></p>
      <p>Your password must be at least 8 characters, have a capital letter, a mixture of numbers and letters and at least one symbol</p>

    </form>
    </div>
    </div>
    </div>
    </div>
  )
}

export default Signup