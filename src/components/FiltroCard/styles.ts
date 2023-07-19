import styled from 'styled-components'

type Props = {
  selecionado: string
}

export const Card = styled.div<Props>`
  padding: 8px;
  border: 1px solid
    ${(props): string =>
      props.selecionado === 'true' ? '#1e90FF' : '#a1a1a1'}}};
  background-color: #fcfcfc;
  color: ${(props): string =>
    props.selecionado === 'true' ? '#1e90FF' : '#5e5e5e'};
  border-radius: 8px;
  cursor: pointer;
`

export const Contador = styled.span`
  font-weight: bold;
  font-size: 24px;
  display: block;
`

export const Label = styled.span`
  font-size: 14px;
`
