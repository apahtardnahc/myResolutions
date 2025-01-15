import { useState } from "react"
import PropTypes from "prop-types"

const ResolutionsPage = ({ data, addResolution }) => {
  const [state1, setState1] = useState(false)
  const handleAddResolution = () => {
    const newResolution = {
      id: data.length + 1, // Simple ID generation
      resolutionText: `Item ${data.length + 1}`,
      resolutionTimePeriod: 12, // Example time period
    }
    addResolution(newResolution)
  }

  return (
    <div>
      <h2>Resolutions</h2>
      {data.length === 0 ? (
        <p>No resolutions available.</p>
      ) : (
        <ul>
          {data.map((item) => (
            <li key={item.id}>
              {item.resolutionText} - {item.resolutionTimePeriod} months
            </li>
          ))}
        </ul>
      )}
      <button onClick={handleAddResolution}>Add Resolution</button>
    </div>
  )
}

ResolutionsPage.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      resolutionText: PropTypes.string.isRequired,
      resolutionTimePeriod: PropTypes.number.isRequired,
    }),
  ).isRequired,
  addResolution: PropTypes.func.isRequired,
}

export default ResolutionsPage
