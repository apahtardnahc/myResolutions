import { useEffect, useState } from "react"

const useResolutionDataHook = () => {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  // Mocked fetch function
  const fetchData = async () => {
    setError(null) // Reset error state before fetching
    setLoading(true) // Set loading to true before starting fetch
    try {
      const mockedResponse = [
        { id: 1, resolutionText: "Item 1", resolutionTimePeriod: 12 },
        { id: 2, resolutionText: "Item 2", resolutionTimePeriod: 6 },
        { id: 3, resolutionText: "Item 3", resolutionTimePeriod: 3 },
      ]
      await new Promise((resolve) => setTimeout(resolve, 1000))
      setData(mockedResponse)
    } catch (err) {
      setError("Failed to fetch data")
    } finally {
      setLoading(false) // Ensure loading is set to false after fetch attempt
    }
  }

  // Mocked post function
  const postData = async (newItem) => {
    setError(null) // Reset error state before posting
    setLoading(true) // Optionally set loading to true while posting
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000))
      console.log("Posted new item:", newItem)
      setData((prevData) => [...prevData, newItem])
    } catch (err) {
      setError("Failed to post data")
    } finally {
      setLoading(false) // Ensure loading is set to false after post attempt
    }
  }

  useEffect(() => {
    fetchData() // Fetch data when the hook is first used
  }, [])

  return {
    fetch: fetchData,
    data,
    post: postData,
    loading, // Return loading state
    error, // Return error state
  }
}

export default useResolutionDataHook
