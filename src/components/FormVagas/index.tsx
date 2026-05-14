import { FormEvent, useState, ChangeEvent } from 'react'
import styled from 'styled-components'

type Props = {
  aoPesquisar: (termo: string) => void
}

const FormVagas = ({ aoPesquisar }: Props) => {
  const [termo, setTermo] = useState<string>('')

  const aoEnviarForm = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    aoPesquisar(termo.toLocaleLowerCase())
  }

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setTermo(e.target.value)
  }

  return (
    <FormContainer onSubmit={aoEnviarForm}>
      <Input
        placeholder="Front-end, fullstack, node, design"
        onChange={handleChange}
        type="search"
      />
      <Button type="submit">Pesquisar</Button>
    </FormContainer>
  )
}

export default FormVagas

// ==================== Styled Components ====================
const FormContainer = styled.form`
  display: grid;
  grid-template-columns: 1fr auto;
  background-color: var(--cor-secundaria);
  padding: 32px;
  border-radius: 12px;
  margin-top: 40px;
  gap: 8px;
` as any

const Input = styled.input`
  padding: 0 16px;
  outline-color: var(--cor-principal);
  border: 1px solid #ccc;
  border-radius: 8px;
  font-size: 16px;

  &:focus {
    border-color: var(--cor-principal);
  }
` as any

const Button = styled.button`
  background-color: var(--cor-principal);
  border: 1px solid var(--cor-principal);
  height: 40px;
  padding: 0 24px;
  font-size: 18px;
  color: var(--cor-secundaria);
  cursor: pointer;
  border-radius: 8px;
  font-weight: bold;

  &:hover {
    background-color: #0056b3;
    border-color: #0056b3;
  }
` as any
