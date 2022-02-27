import React from 'react'
import { shallow } from 'enzyme'

import { UserCard } from 'components'

const user = {
  id: 1,
  name: 'Pedro Paramo',
  address: {
    city: 'Gwenborough',
    street: 'Kulas Light',
  },
}

describe('UserCard component test', () => {
  const wrapper = shallow(<UserCard user={user} />)

  it('should render component correctly', () => {
    expect(wrapper.find('.user-card').exists()).toBeTruthy()
  })

  it('should render initials correctly', () => {
    expect(wrapper.text().includes('PP')).toBeTruthy()
  })

  it('should render city and street correctly', () => {
    expect(wrapper.text().includes('Gwenborough, Kulas Light')).toBeTruthy()
  })
})
