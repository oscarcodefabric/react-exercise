import React from 'react'
import PropTypes from 'prop-types'
import { Avatar, Card } from 'antd'
import Icon from '@ant-design/icons'

import { ReactComponent as Heart } from 'assets/heart.svg'
import userImagePlaceholder from 'assets/user-image-placeholder.jpg'

import './styles.css'

const UserCard = ({ user, onFavoriteClick }) => {
  const { address } = user

  const generateInitials = () => {
    const { name } = user
    const splicedName = name.split(' ')
    return `${(splicedName[0] || '').charAt(0)}${(
      splicedName[1] || ''
    ).charAt(0)}`
  }
  const userImg = (
    <div className="image-container">
      <img alt="user" className="card-image" src={userImagePlaceholder} />
    </div>
  )

  return (
    <Card className="user-card" cover={userImg} hoverable>
      <Avatar className="avatar" size={40}>
        {generateInitials()}
      </Avatar>
      <div className="card-content">
        <h3 className="user-name">{user.name}</h3>
        <h5 className="user-city">{`${address.city}, ${address.street}`}</h5>
      </div>
      <aside>
        <Avatar
          alt="like button"
          className="like-icon"
          onClick={() => onFavoriteClick(user.id)}
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
  onFavoriteClick: PropTypes.func,
}

UserCard.defaultProps = {
  onFavoriteClick: () => {},
}

export default UserCard
