import { Edit, SimpleForm, TextInput } from 'react-admin'

export const EditItemsList = () => {
  return (
    <Edit>
      <SimpleForm>
        <TextInput source='name'></TextInput>
        <TextInput source='id' disabled></TextInput>
        <TextInput source='year'></TextInput>
      </SimpleForm>
    </Edit>
  )
}
