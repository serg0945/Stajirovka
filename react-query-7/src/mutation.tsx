import { useState } from 'react'
import styles from './mutation.module.css'

export const Mutation = () => {
  const [id, setId] = useState('')
  const [name, setName] = useState('')
  return (
    <div className={styles.mutation}>
      <input onChange={e => setId(e.target.value)}></input>
      <input onChange={e => setName(e.target.value)}></input>
    </div>
  )
}
