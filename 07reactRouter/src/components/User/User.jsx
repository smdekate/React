import React from 'react'
import { useParams } from 'react-router-dom'

function User() {
    const {userid} = useParams()
  return (
    <div className='bg-gray-700 py-4 text-3xl text-white text-center'>User: {userid}</div>
  )
}

export default User