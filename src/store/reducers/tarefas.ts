import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import * as enums from './../../utils/enums/Tarefa'
import Tarefa from '../../models/Tarefa'

type TarefaState = {
  itens: Tarefa[]
}

const initialState: TarefaState = {
  itens: [
    {
      id: 1,
      descricao: 'Estudar create react app',
      titulo: 'Estudar React',
      status: enums.Status.PENDENTE,
      prioridade: enums.Prioridade.IMPORTANTE
    },
    {
      id: 2,
      descricao: 'Estudar comandos typescript',
      titulo: 'Estudar Typescript',
      status: enums.Status.CONCLUIDA,
      prioridade: enums.Prioridade.URGENTE
    },
    {
      id: 3,
      descricao: 'TREINAR',
      titulo: 'Nadar',
      status: enums.Status.PENDENTE,
      prioridade: enums.Prioridade.NORMAL
    }
  ]
}

const tarefasSlice = createSlice({
  name: 'tarefas',
  initialState,
  reducers: {
    remover: (state, action: PayloadAction<number>) => {
      state.itens = state.itens.filter((tarefa) => tarefa.id != action.payload)
    },
    editar: (state, action: PayloadAction<Tarefa>) => {
      const indexDaTarefa = state.itens.findIndex(
        (t) => t.id === action.payload.id
      )
      if (indexDaTarefa >= 0) {
        state.itens[indexDaTarefa] = action.payload
      }
    },
    cadastrarTarefa: (state, action: PayloadAction<Omit<Tarefa, 'id'>>) => {
      const existeTarefa = state.itens.find(
        (tarefa) =>
          tarefa.titulo.toLowerCase() === action.payload.titulo.toLowerCase()
      )

      if (existeTarefa) {
        alert('Já existe uma tarefa com o título inserido.')
      } else {
        const ultimaTarefa = state.itens[state.itens.length - 1]
        const novaTarefa = {
          ...action.payload,
          id: ultimaTarefa ? ultimaTarefa.id + 1 : 1
        }
        state.itens.push(novaTarefa)
      }
    },
    alteraStatus: (
      state,
      action: PayloadAction<{ id: number; finalizado: boolean }>
    ) => {
      const indexDaTarefa = state.itens.findIndex(
        (tarefa) => tarefa.id === action.payload.id
      )

      if (indexDaTarefa >= 0)
        state.itens[indexDaTarefa].status = action.payload.finalizado
          ? enums.Status.CONCLUIDA
          : enums.Status.PENDENTE
    }
  }
})

export const { remover, editar, cadastrarTarefa, alteraStatus } =
  tarefasSlice.actions
export default tarefasSlice.reducer
