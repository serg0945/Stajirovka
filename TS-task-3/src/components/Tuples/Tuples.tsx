export const Tuples = () => {
  const tuple: [string, number, number] = ['1', 2, 3]
  tuple.map(el => el)
  const funcTuple1 = (value: [number, string]) => {
    return value
  }
  const funcTuple2 = (name1: string, name2: string): [string, string] => {
    return [name1, name2]
  }
  const funcTupleOptional = (value: [number, string?]) => {
    return value
  }
  const funcTupleRest1 = (value: [...number[]]) => {
    return value.map(el => el * 2)
  }
  const funcTupleRest2 = (value: [number, ...string[], number]) => {
    return value
  }
  const funcTupleReadonly1 = (value: readonly [number, string]) => {
    return value
  }
  const funcTupleReadonly2 = (name1: number, name2: string): readonly [number, string] => {
    return [name1, name2]
  }
  const optionalTuple1: [string, number?] = ['1', 2]
  const optionalTuple2: [string, number?] = ['1']
  const restTuple: [string, ...number[]] = ['1', 2, 3, 4, 5]
  const readonlyTuple: readonly [string, number] = ['1', 2]
  const tupleDecomposition: [string, number] = ['2', 1]
  const [dec1, dec2] = tupleDecomposition
  const [, dec4] = tupleDecomposition
  const [...dec5] = tupleDecomposition
  console.log(tuple)
  console.log(optionalTuple1)
  console.log(optionalTuple2)
  console.log(restTuple)
  console.log(readonlyTuple)
  console.log(dec1)
  console.log(dec2)
  console.log(dec4)
  console.log(dec5[0])
  console.log(dec5[1])
  console.log(funcTuple1([1, '2']))
  console.log(funcTuple2('1', '2')[1])
  console.log(funcTupleOptional([1, '2']))
  console.log(funcTupleOptional([1]))
  console.log(funcTupleRest1([1, 2, 3, 4, 5]))
  console.log(funcTupleRest2([1, '2', '3', 4]))
  console.log(funcTupleReadonly1([1, '2']))
  console.log(funcTupleReadonly2(1, '2'))
  return <></>
}
