import React from 'react'
import { NewTransactionSheet } from './new-transaction-sheet'

describe('<NewTransactionSheet />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<NewTransactionSheet />)
  })
})