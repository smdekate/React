import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {
    // const [data, setData] = useState({})

    // useEffect(() => {
    //     fetch(`https://api.github.com/users/smdekate`)
    //     .then((res) => res.json())
    //     .then(data => setData(data))
    // })

    const data = useLoaderData()

    return (
        <>
        <div className='text-center text-3xl bg-gray-700 text-white py-4 mb-4'>Github followers: {data?.followers}</div>
        <img className='block m-auto rounded-full' src={data?.avatar_url} alt="profile pic" width="250px" />
        </>
    )
}

export default Github
export const githubInfoLoader = async () => {
    const response = await fetch(`https://api.github.com/users/smdekate`)
    return response.json()
}