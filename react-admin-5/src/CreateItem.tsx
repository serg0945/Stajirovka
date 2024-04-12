import { Create, SimpleForm, TextInput, NumberField } from 'react-admin'

export const CreateItem = () => {
  return (
    <Create>
      <SimpleForm>
        <TextInput source='Name' />
        <NumberField source='Year' />
      </SimpleForm>
    </Create>
  )
}
