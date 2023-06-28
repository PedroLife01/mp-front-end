import { PreferencesList } from './PreferencesList'
import { apiEndpoints } from '@/lib/api'

describe('<PreferencesList />', () => {
	it('renders', () => {
		cy.mount(<PreferencesList />)
	})

	it('renders rows with selectable preferences cards properly', () => {
		cy.mount(<PreferencesList />)

		cy.intercept("GET", apiEndpoints.GET_ALL_PHOTOS)

		cy.get('[data-cy="preferences-list"]').children().should('have.lengthOf.within', 6, 32)

		cy.get('[data-cy="preference-card"]').should('have.class', 'card')

		cy.get('[data-cy="preference-card-checked"]').first().should('not.be.visible')

		cy.get('[data-cy="preference-card"]').first().click()

		cy.get('[data-cy="preference-card-checked"]').first().should('be.visible')
	})
})
