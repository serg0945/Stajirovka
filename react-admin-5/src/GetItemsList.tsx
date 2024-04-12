import { TextField, List, Datagrid, EditButton, DeleteButton } from 'react-admin'

export const GetItemsList = () => {
  return (
    <>
      <List>
        <Datagrid rowClick='show'>
          <TextField source='name' />
          <TextField source='id' />
          <TextField source='year' />
          <EditButton />
          <DeleteButton />
        </Datagrid>
      </List>
    </>
  )
}
