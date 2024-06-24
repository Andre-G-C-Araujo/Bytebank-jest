import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Formulario from './index'


describe('Deve renderizar um campo de input', () => {


test('no documento', () => {
  render(<Formulario />)
  const textField = screen.getByPlaceholderText('Digite um valor')
  expect(textField).toBeInTheDocument(); 
})

test('com o type number', () => {
  render(<Formulario />)
  const textField = screen.getByPlaceholderText('Digite um valor')
  expect(textField).toHaveAttribute('type', 'number'); 
});

test('que possa ser preenchido', () => {
  render(<Formulario />)
  const textField = screen.getByPlaceholderText('Digite um valor')
  userEvent.type(textField, '50')
  expect(textField).toHaveValue(50)
})

test('Deve chamar um evento de onSubmit ao clicar em realizar transação', ()=> {
  const realizarTransacao = jest.fn();
  
  render(<Formulario realizarTransacao={realizarTransacao}/>)
  const button = screen.getByRole('button')

  userEvent.click(button)
  expect(realizarTransacao).toHaveBeenCalledTimes(1)
  
})

test('Deve ser possível selecionar uma opção do elemento <select>', ()=> {
  render(<Formulario />)
  const select = screen.getByRole('combobox')
  userEvent.selectOptions(select, ['Depósito'])

  expect(
    screen.getByRole('option', {name: 'Selecione um tipo de transação'}).selected
  ).toBe(false)

  expect(screen.getByRole('option', {name: 'Depósito'}).selected
).toBe(true)
  
})

})