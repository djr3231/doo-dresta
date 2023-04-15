import AppRoutes from "./routes/AppRoutes"
import { Provider } from 'react-redux'
import store from './app/store'

function App() {
  return (
    <Provider  store={store}>
       <div className="App">
      <AppRoutes/>
    
    </div>


    </Provider>

   
  )
}

export default App
