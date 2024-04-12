import { useDispatch } from 'react-redux'
import { useTypedSelector } from '@/hooks/useTypedSelector'
import { addCount, deleteCount } from '@/store/actions'
import { getPosts } from '@/api/getPosts'
import { postPush, postDelete } from '@/store/actionPost'

export const AnyComponent = () => {
  const state = useTypedSelector(state => state.cash.cash)
  const statePost = useTypedSelector(state => state.post.posts)
  const dispatch = useDispatch()
  return (
    <div className='flex gap-4 items-center'>
      <p>{state}</p>
      <button className='border w-10 h-10' onClick={() => dispatch(addCount(1))}>
        +1
      </button>
      <button className='border w-10 h-10' onClick={() => dispatch(deleteCount(1))}>
        -1
      </button>
      <button className='border w-20 h-13' onClick={() => dispatch(getPosts())}>
        Получить запрос
      </button>
      <button className='border w-20 h-13' onClick={() => console.log(statePost)}>
        Вывести массив
      </button>
      <button
        className='border w-20 h-13'
        onClick={() =>
          dispatch(postPush({ userId: Math.random(), id: statePost.length, title: 'Тик-Так', body: 'Тик-Так-Тук-Тик' }))
        }
      >
        Добавить новый объект
      </button>
      <button className='border w-20 h-13' onClick={() => dispatch(postDelete())}>
        Удалить последний объект
      </button>
    </div>
  )
}
