import Link from 'next/link'
import React from 'react'
import styles from '../styles/Home.module.css'
const UsersList = ({users}) => {
  return (
    <div>
        <main className={styles.main}>
<div className={styles.grid}>
    {users?.map(user=>(
        <div className={styles.card}>
            <p>Name:{user.name}</p>
            <p>Email:{user.email}</p>
            <p>Company:{user.company.name}</p>
            <Link href={`/user/${user.id}`}>Know more</Link>
        </div>
    ))}
</div>
        </main>

    </div>
  )
}

export default UsersList