import React, { useEffect, useState } from 'react'
import UserCard from '../components/UserCard'

export const Home = () => {
    const [users, setUsers] = useState([])
    useEffect(() => {
        loadUsers()
    }, [])
    const loadUsers = () => {
        fetch('http://localhost:3006/api/v1/users')
            .then((res) => {
                return res.json();
            })
            .then((data) => {
                setUsers(data?.data)
            });
    }
    return (
        <div className='grid md:grid-cols-5 grid-cols-1 gap-4 m-5'>
            {users && users?.map((user) => {
                return <UserCard name={user?.name} email={user?.email} age={user?.age} />
            })}
        </div>
    )
}
