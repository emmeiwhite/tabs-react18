import React, { useEffect, useState } from 'react'
import Loader from './components/Loader'
import axios from 'axios'
import Sidebar from './components/Sidebar'
import JobsInfo from './components/JobsInfo'

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
    return (
      <div className="jobs-center">
        <Loader />
      </div>
    )
  }

  if (error) {
    return (
      <div className="jobs-center">
        <h2>Error Loading Page ...</h2>
      </div>
    )
  }

  return (
    <div className="jobs-center">
      <Sidebar
        tabs={tabs}
        handleCurrentTab={handleCurrentTab}
      />
      <JobsInfo currentTab={tabs[currentIndex]} />
    </div>
  )
}
