import React from 'react'
import { shallow } from 'enzyme'

import { UsersGrid } from 'components'

const GRID_TITLE = 'Explore Our Top Rated Artists Below'

describe('UsersGrid component test', () => {
  const wrapper = shallow(<UsersGrid />)

  it('should render component correctly', () => {
    expect(wrapper.find('.users-grid').exists()).toBeTruthy()
  })

  it('should render grid title correctly', () => {
    expect(wrapper.text().includes(GRID_TITLE)).toBeTruthy()
  })
})
