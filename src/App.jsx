import Routers from './routes/routes.jsx'

import './App.css'
import ContextProvider from './components/Context.jsx'

function App() {

  return (
    <ContextProvider>
      <div className='App'>
        <Routers />
      </div>
    </ContextProvider>
  )

}

export default App
