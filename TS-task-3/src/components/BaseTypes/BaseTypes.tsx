import { IBaseTypes } from './types'

export const BaseTypes = () => {
  const boolType: boolean = true
  const numberType: number = 33
  const stringType: string = 'Лягушка'
  const arrayType1: string[] = ['a', 'b', 'c', 'd']
  const arrayType2: Array<string> = ['a', 'b', 'c', 'd']
  const arrayType3: IBaseTypes[] = [
    {
      name: 'a',
      age: 36,
    },
    {
      name: 'b',
      age: 23,
    },
  ]
  enum enumType {
    one = 1,
    two = 2,
    three = 3,
    four = 4,
  }
  const anyType: any = 'any' // Лучше не использовать вообще
  const unknownType: unknown = 5 // Вместо any
  typeof unknownType === 'number' ? console.log(unknownType + 5) : unknownType
  const symbolType = Symbol('name')
  const objSymbol = {
    [symbolType]: 'symbol',
    name: '123',
  }
  const undefinedType: undefined = undefined
  const nullType: null = null
  //   function infiniteLoop(): never {
  //     throw new Error('infinite loop')
  //   }
  const obj1: IBaseTypes = {
    name: '123',
    age: 36,
  }
  console.log(boolType)
  console.log(numberType)
  console.log(stringType)
  console.log(arrayType1)
  console.log(arrayType2)
  console.log(arrayType3)
  console.log(enumType)
  console.log(anyType)
  console.log(symbolType)
  console.log(objSymbol)
  console.log(undefinedType)
  console.log(nullType)
  console.log(obj1)
  return <></>
}
