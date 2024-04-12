import { Show, SimpleShowLayout, TextField, ArrayField, NumberField, DateField, ImageField } from 'react-admin'

export const GetItem = () => {
  return (
    <Show>
      <SimpleShowLayout>
        <TextField source='name' />
        <TextField source='id' />
        <ArrayField source='images'>
          <ImageField source='images[0].pathS3' />
          <ImageField source='images[1].pathS3' />
        </ArrayField>
        <NumberField source='year' />
      </SimpleShowLayout>
    </Show>
  )
}
