import { useInfiniteQuery } from '@tanstack/react-query'
import React, { FC } from 'react'
import { getApi } from './lib/getApi'
import type { Comments } from './types'

const getComments = ({ pageParam = 1 }) => getApi(`/posts?_page=${pageParam}`)

export const CommentsList: FC = () => {
  const { data, isFetchingNextPage, hasNextPage, fetchNextPage, isLoading, isError } = useInfiniteQuery({
    queryKey: ['comments'],
    queryFn: getComments,
    getNextPageParam: (lastpages, allPages) => (lastpages.length === 10 ? allPages.length + 1 : false),
  })
  const posts = data?.pages.flatMap(page => page)
  console.log(data)
  if (isLoading) return <p>Загрузка...</p>
  if (isError) return <p>Ошибка</p>
  return (
    <>
      <ul>
        {posts?.map(post => (
          <li key={post.id}>
            <p>{post.name}</p>
            <p>{post.body}</p>
          </li>
        ))}
      </ul>
      {hasNextPage && <button onClick={() => fetchNextPage()}></button>}
      {isFetchingNextPage ? 'Загрузка страницы...' : 'Страница загружена'}
    </>
  )
}
