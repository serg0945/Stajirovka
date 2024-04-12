import { Provider } from 'react-redux'
import { store } from '../store'
import { AnyComponent } from '@components/AnyComponent'

function App() {
  return (
    <div className='p-10'>
      <Provider store={store}>
        <AnyComponent />
      </Provider>
    </div>
  )
}

export default App
