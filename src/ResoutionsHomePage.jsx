import { useEffect } from "react"
import useResolutionDataHook from "./useResolutionDataHook"
import ResolutionsPage from "./ResolutionsPage"

const ResolutionsHomePage = () => {
  const { fetch, data, post, loading, error } = useResolutionDataHook()

  // Log loading and error state after the fetch call
  useEffect(() => {
    console.log("Loading:", loading)
    console.log("Error:", error)
  }, [loading, error])

  useEffect(() => {
    fetch()
  }, [])

  const addResolution = (resData) => {
    post(resData)
  }

  if (loading) {
    return <div>Loading...</div> // Show loading indicator
  }

  if (error) {
    return <div>Error: {error}</div> // Show error message
  }

  return <ResolutionsPage data={data} addResolution={addResolution} /> // Return the ResolutionsPage with data
}

export default ResolutionsHomePage
