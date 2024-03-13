import React, { useContext } from 'react'
import userContext from '../context/context'

const Profile = () => {
    const { username } = useContext(userContext);
    if(!username) return <div>Please sign in </div>

    return <h3>Welcome {username}</h3>
}

export default Profile