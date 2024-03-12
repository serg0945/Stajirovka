import { getAxios, postAxios, deleteAxios} from '@/api/requests'
import { useEffect, useState } from 'react'
import style from '@components/Posts.module.scss'

const Posts = () => {
    
    const [posts, setPosts] = useState([])
    const [pagePosts, setPagePosts] = useState(1)
    
    useEffect(() => {
        const abortController = new AbortController()
        const signal = abortController.signal
        let active = true;
        const getPost = async() => {
            try{
                const postsData = await getAxios('/posts')
                const postList = postsData.data
                if (active) {
                    setPosts(postList)
                }
            }
            catch (err){
                if (!signal?.aborted){
                    console.log(err)
                }
            }
        }
        getPost()

        return () => {
            abortController.abort()
            active = false
        }
    }, [])

    return( 
    <div className={style.posts__content}>
        <p>{import.meta.env.WEBANT_SECRET}</p>
        <div className={style.posts__blockBtnsAll}>
            <button onClick={() => postAxios('/posts', posts)}>Отправить все посты</button>
            <button onClick={() => deleteAxios('/posts/1')}>Удалить все посты</button> {/*// ХЗ*/}
        </div>
        {posts.length == 0 && <p>Пусто...</p>}
        {posts.length >= 1 &&
            <div className="posts__list">
                {posts.slice((pagePosts-1) * 10, (pagePosts-1) * 10  + 10).map(post => (
                    <div className={style.post} key={post.id}>
                        <div className={style.post__block}>
                            <h4 className={style.post__title}>{post.title + ' №' + post.id}</h4>
                            <button onClick={() => postAxios('/posts', post.body, post.title, post.id)} className={style.post__btn}>POST</button>
                            <button onClick={() => deleteAxios(`/posts/${post.id}`)} className={style.post__btn}>DELETE</button> {/*// ХЗ*/}
                        </div>
                        <p className={style.post__body}>{post.body}</p>
                    </div>
                ))}
                <div className={style.post__btnScroll}>
                    <button className={style.post__btnScroll__next} onClick={() => setPagePosts(count => count > 1 ? count - 1 : count)}></button>
                    <span className={style.post__btnScroll__count}>{pagePosts}</span>
                    <button className={style.post__btnScroll__prev} onClick={() =>  setPagePosts(count => count <= 9 ? count + 1 : count)}></button>
                </div>
            </div>
        }
    </div>
    )
}

export default Posts