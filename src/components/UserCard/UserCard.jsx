import React from 'react'
import PropTypes from 'prop-types'
import { Avatar, Card } from 'antd'
import Icon from '@ant-design/icons'

import { ReactComponent as Heart } from 'assets/heart.svg'
import userImagePlaceholder from 'assets/user-image-placeholder.jpg'

import './styles.css'

const UserCard = ({ user }) => {
  const { address } = user

  const userImg = (
    <div className="image-container">
      <img alt="user" className="card-image" src={userImagePlaceholder} />
    </div>
  )

  return (
    <Card className="user-card" cover={userImg} hoverable>
      <Avatar className="avatar" size={40}>
        {user.username[0]}
      </Avatar>
      <div className="card-content">
        <h3 className="user-name">{user.username}</h3>
        <h5 className="user-city">{`${address.city}, ${address.street}`}</h5>
      </div>
      <aside>
        <Avatar
          alt="like button"
          className="like-icon"
          icon={
            <Icon
              className={user.liked ? 'like' : 'dislike'}
              component={Heart}
            />
          }
        />
      </aside>
    </Card>
  )
}

UserCard.propTypes = {
  user: PropTypes.object.isRequired,
}

export default UserCard
