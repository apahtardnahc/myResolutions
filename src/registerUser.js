import axios from "axios"

export const registerUser = async (email, password) => {
  try {
    const response = await axios.post("http://localhost:3000/register", {
      email,
      password,
    })
    console.log("Registration successful:", response.data)
  } catch (error) {
    console.error(
      "Error registering user:",
      error.response ? error.response.data : error.message,
    )
  }
}
