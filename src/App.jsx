import AppRoutes from "./routes/AppRoutes"
import { Provider } from 'react-redux'
import myStore from './app/redux/store'

function App() {
  return (
    <Provider  store={myStore}>

      <AppRoutes/>
    


    </Provider>

   
  )
}

export default App
