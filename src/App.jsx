import React, { useEffect, useState } from 'react'
import Loader from './components/Loader'
import axios from 'axios'
import Main from './components/Main'
import Sidebar from './components/Sidebar'

const url = 'https://www.course-api.com/react-tabs-project'

export default function App() {
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(false)

  const fetchData = async () => {
    try {
      const response = await axios.get(url)
      console.log(response.data)
    } catch (error) {
      setIsLoading(false)
      setError(true)
    }
  }
  useEffect(() => {
    fetchData()
  }, [])

  if (isLoading) {
    return <Loader />
  }

  if (error) {
    return <h2>Error Loading Page ...</h2>
  }

  return (
    <div>
      <Main />
      <Sidebar />
    </div>
  )
}
