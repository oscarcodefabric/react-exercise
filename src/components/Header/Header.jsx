import React from 'react'
import { Button } from 'antd'
import './styles.css'

const Header = () => (
  <div className="header-component">
    <h1 className="title">Browse Our Artists</h1>
    <h3 className="subtitle">Or Add Your Portfolio to Be Discovered</h3>
    <Button className="build-portfolio-button">Build Your Portfolio</Button>
  </div>
)

export default Header
