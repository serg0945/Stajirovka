import { QueryClientProvider, QueryClient } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { PostsList } from './PostsList.tsx'
import { CommentsList } from './CommentsList.tsx'
import { Mutation } from './mutation.tsx'

export const queryClient = new QueryClient()
function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false} />
      <PostsList />
      <CommentsList />
      <Mutation />
    </QueryClientProvider>
  )
}

export default App
