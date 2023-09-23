import React from 'react'
import { useParams } from 'react-router-dom'

function UserDetails() {

    const params = useParams()
    const userId = params.userId
  return (
    <div>
      Details about users {userId}
    </div>
  )
}

export default UserDetails
