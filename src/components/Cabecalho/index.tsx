import styled from 'styled-components'

const Cabecalho = () => (
  <Header>
    <h1>EBAC Jobs</h1>
  </Header>
)

export default Cabecalho

// ==================== Styled Components ====================
const Header = styled.header`
  background-color: var(--cor-secundaria);
  color: var(--cor-principal);
  text-align: center;
  padding: 24px 0;
`
