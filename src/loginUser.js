import axios from "axios"

export const loginUser = async (email, password) => {
  try {
    const response = await axios.post("http://localhost:3000/login", {
      email,
      password,
    })
    console.log("Login successful:", response.data)
  } catch (error) {
    console.error(
      "Error logging in:",
      error.response ? error.response.data : error.message,
    )
  }
}
