import { Provider } from 'react-redux'
import { store } from '@/store'
import { AnyComponent } from '@/components/AnyComponent'

const App = () => {
  return (
    <>
      <Provider store={store}>
        <AnyComponent />
      </Provider>
    </>
  )
}

export default App
