import { useEffect } from "react"
import { useJourneysContext } from "../hooks/useJourneysContext"
import { useAuthContext } from "../hooks/useAuthContext"

// components
import FileDetails from "../components/FilesDetails"

const Files = () => {
  const { journeys, dispatch } = useJourneysContext()
  const {user} = useAuthContext()

  useEffect(() => {
    const fetchJourneys = async () => {
      const response = await fetch('https://backend-oemo.onrender.com/api/journeys', {
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
    
      <div className="journeys">
        <h1 className="title">Your Files</h1>
        {journeys && journeys.map(journey => (
          <FileDetails journey={journey} key={journey._id} />
        ))}
      </div>
      
   
  )
}

export default Files