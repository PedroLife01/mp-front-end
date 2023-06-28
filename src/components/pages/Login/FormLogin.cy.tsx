import React from 'react'
import FormLogin from './FormLogin'

describe('<FormLogin />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<FormLogin />)
  })
})