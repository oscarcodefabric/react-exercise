import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { fetchUsers } from 'actions/usersActions'
import { Header, UsersGrid } from 'components'

const Home = () => {
  const dispatch = useDispatch()

  const users = useSelector((state) => state.usersState.users)

  useEffect(() => {
    dispatch(fetchUsers())
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div className="home-page">
      <Header />
      <UsersGrid users={users} />
    </div>
  )
}

export default Home
