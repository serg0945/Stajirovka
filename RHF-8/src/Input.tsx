import { TextInput, TextInputProps } from '@gravity-ui/uikit'

export interface InputProps extends Omit<TextInputProps, 'type'> {
  field?: Record<string, unknown>
  // Я просто не знаю, можно ли сам файл d.ts менять и как вытянуть значения типа type в TextInputProps и дополнить 'date'
  type?: 'email' | 'number' | 'password' | 'search' | 'tel' | 'text' | 'url' | 'date'
}

export const InputCustom = ({ type, errorMessage, field, className, ...rest }: InputProps) => {
  const withErrorMessage = errorMessage && !rest.disabled
  return (
    <div>
      <TextInput type={type} className={className} {...field}></TextInput>
      {withErrorMessage && <p className=' text-red-500 select-none'>{errorMessage}</p>}
    </div>
  )
}
