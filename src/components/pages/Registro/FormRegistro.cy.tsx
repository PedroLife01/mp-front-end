import React from 'react'
import FormRegistro from './FormRegistro'

describe('<FormRegistro />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<FormRegistro />)
  })
})