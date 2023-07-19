import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const BotaoAdicionar = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;

  position: fixed;
  right: 40px;
  bottom: 40px;
  border-radius: 50%;
  height: 64px;
  width: 64px;

  background-color: green;
  color: #fff;
  font-size: 40px;
  font-family: Roboto, sans-serif;

  text-decoration: none;
`
