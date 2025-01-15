import React, { useState } from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom" // Import useNavigate

const Register = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const navigate = useNavigate() // Initialize useNavigate

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const response = await axios.post("http://localhost:3000/register", {
        email,
        password,
      })
      console.log("Registration successful:", response.data)
      // Navigate to the Login page after successful registration
      navigate("/login") // Navigate to the login page
    } catch (error) {
      console.error(
        "Error registering user:",
        error.response ? error.response.data : error.message,
      )
    }
  }

  return (
    <div>
      <h2>Register</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          required
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          required
        />
        <button type="submit">Register</button>
      </form>
    </div>
  )
}

export default Register
