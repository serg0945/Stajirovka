import { IUtilityType } from './types'

export const UtilityTypes = () => {
  //   const AwaitedType = async (value: string): Promise<string> => {
  //     let awaitedData: Awaited<ReturnType<typeof AwaitedType>>
  //     console.log(awaitedData)
  //     return 'value'
  //   }
  const funcPartial = <T,>(obj1: T, obj2: Partial<T>) => {
    return [obj1, obj2]
  }
  const funcRequired = <T,>(obj1: T, obj2: Required<T>) => {
    return [obj1, obj2]
  }
  const funcPromise = async (url: string): Promise<string> => {
    const data = await fetch(url)
    return '12'
  }
  type typeAwaited1 = Awaited<typeof funcPromise>
  type typeAwaited2 = Awaited<Promise<string>>
  const objReadonly1: Readonly<IUtilityType> = { name: '123', age: 36, isMan: true }
  const objReadonly2 = { name: '123', age: 36, isMan: true } as const
  const objReadonly3: ReadonlyArray<IUtilityType> = [
    { name: '123', age: 36, isMan: true },
    { name: '222', age: 22, isMan: true },
    { name: '333', age: 56, isMan: false },
  ]
  //   objReadonly3[0] = { name: '123', age: 36, isMan: true } // Ошибка, ибо поле не получится изменить
  //   objReadonly.name = '321' // Ошибка, ибо поле не получится изменить
  // const objReadonly3 = <const>{ name: '123', age: 36, isMan: true } не работает хз

  const objPartial1 = {
    name: 'Еул',
    age: 18,
    isMan: true,
  }
  const objPartial2 = {
    name: 'Шлёпа',
  }
  const objOmit: typeOmit = {
    isMan: true,
  }
  const objReturnType: typeReturnType2 = {
    age: 18,
    name: 'Шлёпа',
  }
  type typeRecord1 = { width: number | undefined; height: number | undefined; size: number | undefined }
  type typeRecord2 = Record<'width' | 'height' | 'size', number | undefined>
  type typePick = Pick<IUtilityType, 'name' | 'age'>
  const objPick: typePick = {
    name: 'pick',
    age: 18,
  }
  type typeOmit = Omit<IUtilityType, 'name' | 'age'>
  type typeExclude = Exclude<'name' | 'age' | 'aboba' | 'estShiga?', 'name' | 'age'>
  const strExclude1: typeExclude = 'aboba'
  //   const strExclude2: typeExclude = 'name' // Ошибка, это поле было удалено
  type typeNonNullable = NonNullable<string | undefined | null>
  const strNonNullable1: typeNonNullable = '123'
  // const strNonNullable2: typeNonNullable = undefined // Ошибка, только не undefined или null
  // console.log(funcPartial<IUtilityType>(objPartial1, objPartial2))
  // console.log(funcRequired<IUtilityType>(objPartial1, objPartial2)) // Тут ошибка, ибо не все поля указаны
  type typeReturnType1 = ReturnType<() => string> // string
  const funcReturnType = (name: string, age: number) => {
    return { age, name }
  }
  type typeReturnType2 = ReturnType<typeof funcReturnType>
  class classInstanceType {
    a = 0
    b = 0
  }
  type typeInstanceType = InstanceType<typeof classInstanceType> // Для классов хороше
  const funcParameters1 = (arg1: { a: number; b: number }, arg2: { c: string; d: string }) => {
    console.log([arg1, arg2])
  }
  const funcParameters2 = (arg1: string, arg2: string) => {
    console.log(arg1, arg2)
  }
  type typeParameters1 = Parameters<typeof funcParameters1>
  type typeParameters2 = Parameters<typeof funcParameters2>
  const objParameters1 = {
    a: 1,
    b: 2,
  }
  const objParameters2 = {
    c: '3',
    d: '4',
  }
  const objParameters3: typeParameters1 = [objParameters1, objParameters2]
  const objParameters4: typeParameters2 = ['arg1', 'arg2']
  // function funcThis(this: { name: string }) {
  //   // Сложно
  //   return 'Hello' + this.name
  // }
  // function funcThisParameter1(this: { name: string }) {
  //   // Сложно
  //   return this.name.toLocaleUpperCase()
  // }
  // function funcThisParameter2(value: ThisParameterType<typeof funcThisParameter1>) {
  //   // Сложно
  //   return funcThisParameter1.call(value)
  // }

  // type typeThisParameterType = ThisParameterType<(this: { name: string }) => void>
  // funcThis.call({ name: 'This' })
  // funcThisParameter2({ name: 'This' })
  return <></>
}
