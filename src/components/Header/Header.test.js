import React from 'react'
import { shallow } from 'enzyme'

import { Header } from 'components'

const TITLE = 'Browse Our Artists'

describe('Header component test', () => {
  const wrapper = shallow(<Header />)

  it('should render components correctly', () => {
    expect(wrapper.find('.header-component').exists()).toBeTruthy()
  })

  it('should render title correctly', () => {
    expect(wrapper.text().includes(TITLE)).toBeTruthy()
  })
})
