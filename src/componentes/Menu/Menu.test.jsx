import { screen, render } from "@testing-library/react";
import Menu from ".";


test('Deve renderizar um link para a pagina inicial', () => {
  render(<Menu />);
  const linkHomePage = screen.getByText('Inicial');
  expect(linkHomePage).toBeInTheDocument();
})

test('Deve renderizar uma list de links', () => {
  render(<Menu />);
  const links = screen.getAllByRole('link');
  expect(links).toHaveLength(4);
})

test('Nao deve renderizar o link para Extrato', () => {
  render(<Menu />);
  const linkExtrato = screen.queryByText('Extrato');
  expect(linkExtrato).not.toBeInTheDocument();
})

test('Deve renderizar uma lista de links com a classe link', () => {
  render(<Menu />)
  const links = screen.getAllByRole('link')
  links.forEach(link => expect(link).toHaveClass('link'))
  expect(links).toMatchSnapshot();
})