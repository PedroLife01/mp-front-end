import React from 'react'
import { ThemeSwitcher } from './ThemeSwitcher'

describe('<ThemeSwitcher />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<ThemeSwitcher />)
  })
  
  it('changes theme on click', () => {
    cy.mount(<ThemeSwitcher />)

    const theme = {
      light: 'fantasy',
      dark: 'dark'
    }
    
    cy.get('[data-cy="light-theme"]').should('have.css', 'opacity', "1")
    cy.get('[data-cy="dark-theme"]').should('have.css', 'opacity', "0")
    
    cy.get('[data-cy="theme-switcher"]').click()
    
    cy.get('html').should("have.attr", "data-theme", theme.light)
    
    cy.get('[data-cy="light-theme"]').should('have.css', 'opacity', "0")    
    cy.get('[data-cy="dark-theme"]').should('have.css', 'opacity', "1")
  })
})