import React from 'react'
import PropTypes from 'prop-types'
import { Input } from 'antd'
import Icon from '@ant-design/icons'

import { ReactComponent as SearchIcon } from 'assets/search.svg'
import './styles.css'

const { Search } = Input

const SearchBar = ({ setSearchTerm }) => {
  const handleSearch = (e) => {
    setSearchTerm(e.toLowerCase())
  }

  return (
    <div className="search-bar-container">
      <Search
        addonBefore={<Icon className="search-icon" component={SearchIcon} />}
        className="search-bar"
        enterButton={<button className="search-button">Search</button>}
        placeholder="Artists Names &amp; Styles"
        onSearch={handleSearch}
      />
    </div>
  )
}

SearchBar.propTypes = {
  setSearchTerm: PropTypes.func,
}

SearchBar.defaultProps = {
  setSearchTerm: () => {},
}

export default SearchBar
