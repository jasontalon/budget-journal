import dayjs from 'dayjs'
import 'dayjs/plugin/utc'

const EXPENSES_KEY = ''
export const state = () => ({
  expenses: localStorage.getItem(EXPENSES_KEY) ?? [],
})

export const mutations = {
  add(state, { id, category, description, amount }) {
    state.expenses.add({
      id,
      category,
      description,
      amount,
      createdAt: dayjs().utc(),
    })
  },
  remove(state, id) {
    const updatedExpenses = state.expenses.filter((p) => p.id !== id)
    state.expenses = updatedExpenses
  },
  update(state, { id, category, description, amount }) {
    state.expenses = state.expenses.map((p) => {
      p.id === id
        ? { ...p, category, description, amount, updatedAt: dayjs().utc() }
        : p
    })
  },
}
