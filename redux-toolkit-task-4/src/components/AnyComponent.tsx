import { addCash, deleteCash } from '@/store/cashSlice'
import { useDispatch, useSelector } from 'react-redux'

export const AnyComponent = () => {
  const dispatch = useDispatch()
  const state = useSelector((state: any) => state.cash.cash)
  return (
    <div className='flex gap-2 m-10 items-center'>
      <span>{state}</span>
      <button className='border w-10 h-10' onClick={() => dispatch(addCash(5))}>
        +5
      </button>
      <button className='border w-10 h-10' onClick={() => dispatch(deleteCash())}>
        -1
      </button>
      <button className='border w-20 h-13'>Выгрузить массив</button>
      <button className='border w-20 h-13'>Вывести массив</button>
      <button className='border w-20 h-13'>Добавить пост</button>
      <button className='border w-20 h-13'>Удалить последний пост</button>
    </div>
  )
}
