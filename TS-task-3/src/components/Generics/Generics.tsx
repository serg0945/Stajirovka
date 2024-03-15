export const Generics = () => {
  function getFirstElement(array: (number | string)[]) {
    return array[0]
  }
  function getFirstElementGeneric<T>(array: T[]): T {
    return array[0]
  }
  const getFirstElementGenericArrow = <T,>(array: T[]): T => {
    return array[0]
  }
  function convertToArray(input: number): number[] {
    return [input]
  }
  function convertToArrayGeneric<T>(input: T): T[] {
    return [input]
  }
  function twoGenerics1<T, U>(age: T, name?: U): T {
    console.log(name)
    return age
  }
  function twoGenerics2<T, U>(input1: T, input2: U): [T, U] {
    return [input1, input2]
  }
  console.log(getFirstElement([1, 2, 3]))
  console.log(getFirstElement(['1', '2', '3']))
  console.log(getFirstElementGeneric<number>([1, 2, 3]))
  console.log(getFirstElementGeneric<string>(['1', '2', '3']))
  console.log(getFirstElementGenericArrow<number>([1, 2, 3]))
  console.log(convertToArray(5))
  console.log(convertToArrayGeneric(5))
  console.log(twoGenerics1(18, 'Мышка'))
  console.log(twoGenerics2(18, 'Мышка'))
  return <></>
}
