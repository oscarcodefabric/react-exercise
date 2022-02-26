import React from 'react'
import PropTypes from 'prop-types'
import { Avatar, Card } from 'antd'

import userImagePlaceholder from 'assets/user-image-placeholder.jpg'

import './styles.css'

const { Meta } = Card

const UserCard = ({ user }) => {
  const { address } = user

  const userAvatar = (
    <Avatar className="avatar" size={40}>
      {user.username[0]}
    </Avatar>
  )

  const userInfo = (
    <div className="card-content">
      <h3 className="user-name">{user.username}</h3>
      <h5 className="user-city">{`${address.city}, ${address.street}`}</h5>
    </div>
  )

  const userImg = (
    <div className="image-container">
      <img
        alt="example"
        className="card-image"
        src={userImagePlaceholder}
      />
    </div>
  )

  return (
    <Card className="user-card" cover={userImg} hoverable>
      <Meta avatar={userAvatar} title={userInfo} />
    </Card>
  )
}

UserCard.propTypes = {
  user: PropTypes.object.isRequired,
}

export default UserCard
