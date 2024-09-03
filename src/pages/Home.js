import { useEffect } from "react"
import { useJourneysContext } from "../hooks/useJourneysContext"
import { useAuthContext } from "../hooks/useAuthContext"
import { Link } from 'react-router-dom'



// components
import JourneyDetails from "../components/JourneyDetails"
import JourneyForm from "../components/JourneyForm"


const Home = () => {
  const { journeys, dispatch } = useJourneysContext()
  const {user} = useAuthContext()

  useEffect(() => {
    const fetchJourneys = async () => {
      const response = await fetch('/api/journeys', {
        headers: {
          'Authorization': `Bearer ${user.token}`
        }
      })
      const json = await response.json()

      if (response.ok) {
        dispatch({type: 'SET_JOURNEYS', payload: json})
      }
    }

    if (user) {
      fetchJourneys()
    }
  }, [dispatch, user])

  return (
    <div className="container">
<div className="menu-page">
<h2>Hi {user.email}, welcome back!</h2>
<div className="menu">

<Link to="/addjourney" style={{ textDecoration: 'none' }}><h1 className="one"><span class="material-symbols-outlined">
playlist_add
</span> Create A Journey</h1></Link>


<Link to="/journeys" style={{ textDecoration: 'none' }}><h1 className="two"><span class="material-symbols-outlined">
flight
</span> Your Journeys </h1></Link>


<Link to="/files" style={{ textDecoration: 'none' }}><h1 className="three"><span class="material-symbols-outlined">
home_storage
</span> Files</h1></Link>


<Link to="/about" style={{ textDecoration: 'none' }}><h1 className="four"><span class="material-symbols-outlined" >
info
</span> About</h1></Link>

</div>
</div>
</div>
  )
}

export default Home