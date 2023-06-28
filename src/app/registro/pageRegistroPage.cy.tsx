import React from 'react'
import RegistroPage from './page'

describe('<RegistroPage />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<RegistroPage />)
  })
})