import dayjs from 'dayjs'
import utc from 'dayjs/plugin/utc'
dayjs.extend(utc)
const BUDGETS_KEY = '__BUDGETS'

export const state = () => ({
  budgets: localStorage.getItem(BUDGETS_KEY) ?? [],
})

export const mutations = { 
  add(state, { id, name, category, amount, year, month }) {
    console.log(state)
    state.budgets.push({
      id,
      name,
      category,
      amount,
      year,
      month,
      createdAt: dayjs().utc(),
    })
  },
  remove(state, id) {
    const updatedBudgets = state.budgets.filter((p) => p.id !== id)
    state.budgets = updatedBudgets
  },
  update(state, { id,  name, category, amount, year, month  }) {
    state.budgets = state.budgets.map((p) => {
      p.id === id
        ? { ...p, name, category, amount, year, month, updatedAt: dayjs().utc() }
        : p
    })
  },
}
