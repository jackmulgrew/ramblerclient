import { useEffect } from "react"
import { useJourneysContext } from "../hooks/useJourneysContext"
import { useAuthContext } from "../hooks/useAuthContext"


// components
import JourneyDetails from "../components/JourneyDetails"

const Journeys = () => {
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

      <div className="about">
      <div className="container">
        
        <h1 className="title">About Rambler</h1>
        <div className="row">
          <div className="col">
        <img src={require('./images/background.jpg')} />
        </div>
        <div className="col">
        <p>Rambler is an application dedicated to supporting travellers by providing a platform to store their travel information. </p>
        <p> This application is being used in a study to explore the management & organisation of information when travelling. </p>
        <p>Rambler is currently under development so the platform may become unvailable for periods of time and features on the application may be removed or have bugs.</p>
        </div>
      </div>
      </div>
      </div>      
      
   
  )
}

export default Journeys