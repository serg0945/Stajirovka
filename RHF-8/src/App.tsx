import { useForm, SubmitHandler, SubmitErrorHandler, Controller, useFieldArray } from 'react-hook-form'
import { InputCustom } from './Input'

type FormValues = {
  firstInput: number
  secondInput: Date
  cart: {
    inputNumber: number
    inputDate: Date
  }[]
}

const App = () => {
  const {
    handleSubmit,
    control,
    formState: { dirtyFields },
    getValues,
  } = useForm<FormValues>({
    defaultValues: {
      firstInput: 0,
      secondInput: new Date(),
    },
  })
  const { fields, append } = useFieldArray({
    name: 'cart',
    control,
  })
  const onsubmit: SubmitHandler<FormValues> = data => console.log(data)
  const onError: SubmitErrorHandler<FormValues> = data => console.log(data)
  return (
    <form onSubmit={handleSubmit(onsubmit, onError)} className='flex flex-col gap-5 w-[20vw]'>
      <div className='border-b-2 border-black'>
        <Controller
          name='firstInput'
          control={control}
          render={({ field, fieldState: { error } }) => (
            <InputCustom field={field} type='number' errorMessage={error?.message} className='mb-2' />
          )}
          rules={{
            required: { value: true, message: 'Это поле должно быть обязательно заполненным' },
            minLength: { value: 5, message: `Длина числа должна быть больше 5` },
            maxLength: { value: 7, message: `Длина числа должна быть меньше 7` },
          }}
        />
        {/* В Gravity UI есть инпут для даты - DateField */}
        <Controller
          name='secondInput'
          control={control}
          render={({ field, fieldState: { error } }) => (
            <InputCustom field={field} type='date' errorMessage={error?.message} className='pb-2' />
          )}
          rules={{
            required: {
              value: !!dirtyFields.firstInput,
              message: 'Второй инпут становится обязательным, когда заполнен первый',
            },
            validate: {
              currentData: () =>
                new Date(getValues('secondInput')).toISOString() > new Date().toISOString() ||
                'Дата должна быть больше текущей',
            },
          }}
        />
      </div>
      {fields.map((field, index) => (
        <div key={field.id} className='flex flex-col gap-3'>
          <p>{index}</p>
          <Controller
            name={`cart.${index}.inputNumber`}
            control={control}
            render={({ field, fieldState: { error } }) => (
              <InputCustom field={field} type='number' errorMessage={error?.message} />
            )}
            rules={{
              required: { value: true, message: 'Это поле должно быть обязательно заполненным' },
              minLength: { value: 5, message: `Длина числа должна быть больше 5` },
              maxLength: { value: 7, message: `Длина числа должна быть меньше 7` },
            }}
          />
          <Controller
            name={`cart.${index}.inputDate`}
            control={control}
            render={({ field, fieldState: { error } }) => (
              <InputCustom field={field} type='date' errorMessage={error?.message} />
            )}
            rules={{
              required: {
                value: !!dirtyFields.firstInput,
                message: 'Второй инпут становится обязательным, когда заполнен первый',
              },
              validate: {
                currentData: () =>
                  new Date(getValues('secondInput')).toISOString() > new Date().toISOString() ||
                  'Дата должна быть больше текущей',
              },
            }}
          />
        </div>
      ))}
      <button
        type='button'
        onClick={() => append({ inputNumber: 0, inputDate: new Date() })}
        className='rounded border border-black p-1'
      >
        Добавить инпуты
      </button>
      <button type='submit' className='border border-black'>
        Отправить
      </button>
    </form>
  )
}

export default App
