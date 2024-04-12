import { useQuery, useMutation } from '@tanstack/react-query'
import axios from 'axios'
import { FC, useState } from 'react'

const getPosts = async (postId: number) => {
  const { data } = await axios(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`)
  return data
}

type Post = {
  id: number
  title: string
  body: string
}

export const PostsList: FC = () => {
  const [page, setPage] = useState(100)
  const { data, isError, isLoading, isPreviousData } = useQuery({
    queryKey: ['posts', page, { keepPreviousData: true }],
    queryFn: () => getPosts(page),
  })
  if (isLoading) return <p>Загрузка...</p>
  if (isError) return <p>Ошибка</p>
  // const mutation = useMutation()
  console.log(data)
  return (
    <>
      <ul>
        {data.map((post: Post) => (
          <li key={post.id}>
            <span>{post.id}</span>
            <p>{post.body}</p>
          </li>
        ))}
      </ul>
      <div>
        <button onClick={() => setPage(page => page - 1)} disabled={page < 2}>
          ←
        </button>
        <span>Текущая страница: {page}</span>
        <button
          onClick={() => {
            if (!isPreviousData && data.hasMore) {
              setPage(page => page + 1)
            }
            setPage(page => page + 1)
          }}
          disabled={page > 99}
        >
          →
        </button>
      </div>
      <div></div>
    </>
  )
}
