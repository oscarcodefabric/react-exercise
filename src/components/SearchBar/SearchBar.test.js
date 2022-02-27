import React from 'react'
import { mount } from 'enzyme'

import { SearchBar } from 'components'

describe('SearchBar component test', () => {
  const wrapper = mount(<SearchBar />)

  it('should render component correctly', () => {
    expect(wrapper.find('.search-bar').exists()).toBeTruthy()
  })

  it('should render search button correctly', () => {
    expect(wrapper.find('button').text().includes('Search')).toBeTruthy()
  })
})
