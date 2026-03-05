/// <reference types="cypress" />
import { faker } from '@faker-js/faker';

const nome = faker.person.fullName();
const email = faker.internet.email();
const telefone = faker.phone.number("###########");
const senha = faker.internet.password();

before(() => {
  cy.visit("register.html");
});

describe('Fluxo completo testando todas funcionalidades - Hub De Leitura EBAC', () => {
  it('Deve cadastrar usuário, fazer logout e login', () => {

    cy.cadastro(nome, email, telefone, senha, senha);
    cy.get('#alert-container').should('contain', 'Conta criada com sucesso!');
    cy.url().should('include', 'dashboard.html')

    cy.get('.btn-outline-danger').click()

    cy.login(email, senha)
    cy.get('#alert-container').should('contain', 'sucesso')
    cy.url().should('contain', 'dashboard.html')
  });
});
