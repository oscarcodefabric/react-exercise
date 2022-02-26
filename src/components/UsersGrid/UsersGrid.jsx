import React from 'react'
import PropTypes from 'prop-types'
import { Col, Row } from 'antd'

import { UserCard } from 'components'

import './styles.css'

const UsersGrid = ({ users }) => (
  <div className="users-grid">
    <Row justify="center">
      <Col className="users-grid-container">
        <h3 className="grid-title">Explore Our Top Rated Artists Below</h3>
        {users.map((user) => (
          <UserCard key={user.id} user={user} />
        ))}
      </Col>
    </Row>
  </div>
)

UsersGrid.propTypes = {
  users: PropTypes.arrayOf(PropTypes.instanceOf(Object)),
}

UsersGrid.defaultProps = {
  users: [],
}

export default UsersGrid
