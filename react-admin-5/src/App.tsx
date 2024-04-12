import { Admin, Resource } from 'react-admin'
import { dataProvider } from './dataProvider'
import { GetItemsList } from './GetItemsList'
import { EditItemsList } from './EditItemsList'
import { CreateItem } from './CreateItem'
import { GetItem } from './GetItem'

export const App = () => (
  <Admin dataProvider={dataProvider}>
    <Resource name='autos' list={GetItemsList} edit={EditItemsList} show={GetItem} create={CreateItem}></Resource>
  </Admin>
)
