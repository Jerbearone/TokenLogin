import { useState } from 'react'
import './App.css'
import SignUpForm from './components/SignUpForm'
import Authenticate from './components/Authenticate'

function App() {
  const [token, setToken] = useState(null)

  return (
    <div>
      <SignUpForm token={token} setToken={setToken}></SignUpForm>
      <Authenticate token={token} setToken={setToken}></Authenticate>

    </div>
  )
}

export default App
