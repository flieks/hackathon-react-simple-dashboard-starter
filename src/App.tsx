import { useState } from 'react'
import './App.css'
import AppContext from "./AppContext";
import AppMaterial from './AppMaterial'

function App() {
  const [someState, setSomeState] = useState("some state")

  return (
      
       <AppContext.Provider value={{ setSomeState, someState }}>
          <AppMaterial />
       </AppContext.Provider>
     
  )
}

export default App
