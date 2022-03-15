import logo from "./logo.svg"
import "./App.css"
import GoogleLogin from "react-google-login"
import { useState } from "react"
import axios from "axios"

function App() {
  const [response, setResponse] = useState("Not yet!")

  const googleSuccessHandler = async (response) => {
    console.log(response)
    console.log(response.profileObj)

    const { data } = await axios.post("http://127.0.0.1:8000/", {
      token_id: response.tokenId,
    })

    setResponse(JSON.stringify(data))
  }

  const googleErrorHandler = (response) => {
    console.log(response)
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        <div>
          <GoogleLogin
            clientId="clinetId"
            //  buttonText="Login With Google"
            onSuccess={googleSuccessHandler}
            onFailure={googleErrorHandler}
            cookiePolicy={"single_host_origin"}
          />
        </div>

        <p>{response}</p>
      </header>
    </div>
  )
}

export default App
