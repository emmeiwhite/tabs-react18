import React, { useEffect, useState } from 'react'
import Loader from './components/Loader'
import axios from 'axios'
import Main from './components/Main'
import Sidebar from './components/Sidebar'

const url = 'https://www.course-api.com/react-tabs-project'

export default function App() {
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState(false)
  const [tabs, setTabs] = useState([])

  const [currentIndex, setCurrentIndex] = useState(0)

  const handleCurrentTab = id => {
    setCurrentIndex(id)
  }

  const fetchData = async () => {
    try {
      const response = await axios.get(url)
      console.log(response.data)
      setIsLoading(false)
      setTabs(response.data)
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
      <Main
        tabs={tabs}
        handleCurrentTab={handleCurrentTab}
      />
      <Sidebar currentTab={tabs[currentIndex]} />
    </div>
  )
}
