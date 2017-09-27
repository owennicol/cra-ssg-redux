import React from 'react'
import { shallow } from 'enzyme'
import Test from './Test'

describe('Test component', () => {
  it('renders without crashing', () => {
    shallow(<Test />)
  })
})
