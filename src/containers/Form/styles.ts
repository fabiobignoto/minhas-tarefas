import { styled } from 'styled-components'

const Form = styled.form`
  font-weight: bold;
  color: #666;
  font-size: 14px;

  max-width: 568px;
  width: 100%;
  max-height: 90vh;
  overflow-y: scroll;

  textarea {
    margin: 16px 0;
    resize: none;
  }
`
export const Opcoes = styled.div`
  margin-bottom: 24px;

  p {
    margin-bottom: 8px;
  }
`

export const Opcao = styled.div`
  display: inline;
  text-transform: capitalize;
  label {
    margin-right: 24px;
    margin-left: 4px;
    display: inline-block;
  }
`

export default Form
